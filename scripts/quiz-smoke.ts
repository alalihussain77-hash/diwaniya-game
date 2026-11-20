import { execFileSync, spawn, type ChildProcess } from 'node:child_process';
import { chromium, type Browser, type Page } from '@playwright/test';
import { validateCategories, validateQuestionBank } from '../src/utils/validateQuestionBank';

const port = Number(process.env.QUIZ_SMOKE_PORT || 4173);
const appUrl = `http://127.0.0.1:${port}`;
let server: ChildProcess | undefined;
let browser: Browser | undefined;

function fail(message: string): never {
  throw new Error(`[quiz-smoke] ${message}`);
}

async function loadQuestionData(): Promise<void> {
  let categoriesModule: typeof import('../src/data/categories');
  let productsModule: typeof import('../src/data/productsQuestions');

  try {
    [categoriesModule, productsModule] = await Promise.all([
      import('../src/data/categories'),
      import('../src/data/productsQuestions'),
    ]);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    fail(`question-bank syntax/import error: ${message}`);
  }

  const errors = [
    ...validateCategories(categoriesModule.INITIAL_CATEGORIES),
    ...validateQuestionBank(productsModule.products100Questions, 'products100Questions'),
  ];

  if (errors.length > 0) {
    fail(`question-bank validation failed:\n${errors.map((error) => `  - ${error}`).join('\n')}`);
  }

  console.log(
    `[quiz-smoke] validated ${categoriesModule.INITIAL_CATEGORIES.length} categories and ${productsModule.products100Questions.length} product questions`,
  );
}

function resolveChromium(): string {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;

  try {
    return execFileSync('which', ['chromium'], { encoding: 'utf8' }).trim();
  } catch {
    fail('Chromium was not found; install Chromium or set CHROMIUM_PATH');
  }
}

async function waitForApp(): Promise<void> {
  const deadline = Date.now() + 30_000;
  let lastError = 'no response';

  while (Date.now() < deadline) {
    try {
      const response = await fetch(appUrl);
      if (response.ok) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  fail(`app did not become ready at ${appUrl}: ${lastError}`);
}

async function startApp(): Promise<void> {
  server = spawn('npm', ['run', 'dev', '--', '--port', String(port)], {
    env: { ...process.env, VITE_ALLOW_LOCAL_GUEST_FALLBACK: 'true' },
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: true,
  });

  let output = '';
  server.stdout?.on('data', (chunk) => {
    output += chunk.toString();
  });
  server.stderr?.on('data', (chunk) => {
    output += chunk.toString();
  });

  try {
    await waitForApp();
  } catch (error) {
    fail(`${error instanceof Error ? error.message : String(error)}\n${output}`);
  }
}

async function assertPlayerPath(page: Page): Promise<void> {
  await page.goto(appUrl, { waitUntil: 'networkidle' });

  await page.getByText('زائر محلي').waitFor({ state: 'visible', timeout: 10_000 });
  await page.getByRole('button', { name: /امش لاختيار الفئات العامة/ }).click();

  await page.getByRole('button', { name: /اختيار عشوائي/ }).first().click();
  await page.getByRole('button', { name: /يلا للفئات الخاصة/ }).click();

  await page.getByRole('button', { name: /اختيار عشوائي/ }).first().click();
  await page.getByRole('button', { name: /شغّل التحدي والأسئلة/ }).click();

  await page.getByText(/أسئلة الشوط الأول: الفئات العامة المشتركة/).waitFor({
    state: 'visible',
    timeout: 10_000,
  });
  // Dismiss the first-round introduction before interacting with question cards.
  await page.getByRole('button', { name: /فهمت، يلا نبدأ الشوط الأول/ }).click();

  const pointCards = page.getByRole('button').filter({ hasText: /^\d+$/ });
  if ((await pointCards.count()) === 0) {
    fail('first question board loaded without any question point cards');
  }

  console.log('[quiz-smoke] guest entry reached the first question board');

  if ((await pointCards.count()) < 3) {
    fail('not enough question cards for the power-up regression test');
  }

  // A selected power-up must remain available if the question is cancelled.
  await pointCards.first().click();
  await page.getByRole('button', { name: 'الحرامي', exact: true }).click();
  await page.getByRole('button', { name: 'إغلاق السؤال' }).click();
  await pointCards.first().click();

  const stealButton = page.getByRole('button', { name: 'الحرامي', exact: true });
  await stealButton.waitFor({ state: 'visible' });
  if (await stealButton.isDisabled()) {
    fail('steal power-up was consumed when a question was closed with X');
  }

  // Scoring the question should consume the selected power-up for this team.
  await stealButton.click();
  await page.getByRole('button', { name: 'كشف الإجابة الصحيحة' }).click();
  await page.getByRole('button', { name: 'التالي', exact: true }).click();
  await page.getByRole('button', { name: /إلغاء.*بدون نقاط/ }).click();

  // The other team has its own unused power-ups.
  await pointCards.nth(1).click();
  const otherTeamSteal = page.getByRole('button', { name: 'الحرامي', exact: true });
  if (await otherTeamSteal.isDisabled()) {
    fail('steal power-up was incorrectly consumed for the other team');
  }
  await page.getByRole('button', { name: 'كشف الإجابة الصحيحة' }).click();
  await page.getByRole('button', { name: 'التالي', exact: true }).click();
  await page.getByRole('button', { name: /إلغاء.*بدون نقاط/ }).click();

  // Turn is back to the original team; their steal must now be unavailable.
  await pointCards.nth(2).click();
  const consumedSteal = page.getByRole('button', { name: 'مستخْدَم', exact: true });
  await consumedSteal.waitFor({ state: 'visible' });
  if (!(await consumedSteal.isDisabled())) {
    fail('steal power-up was not consumed after the question was scored');
  }
  console.log('[quiz-smoke] verified cancel-versus-score power-up usage');
}

async function assertBrowserStorageMigration(page: Page): Promise<void> {
  const key = '__diwaniya_ci_storage_test__';
  const modulePath = '/src/utils/persistentStorage.ts';
  await page.goto(appUrl, { waitUntil: 'domcontentloaded' });

  // Simulate a stale legacy value alongside a newer IndexedDB value.
  await page.evaluate(async (testKey) => {
    localStorage.setItem(testKey, 'older-local-storage-value');
    await new Promise<void>((resolve, reject) => {
      const request = indexedDB.open('diwaniya_app_storage_db', 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('app_keyval_store')) {
          db.createObjectStore('app_keyval_store', { keyPath: 'key' });
        }
      };
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction('app_keyval_store', 'readwrite');
        tx.objectStore('app_keyval_store').put({ key: testKey, value: 'newer-indexeddb-value' });
        tx.oncomplete = () => { db.close(); resolve(); };
        tx.onerror = () => reject(tx.error);
      };
    });
  }, key);

  await page.reload({ waitUntil: 'domcontentloaded' });
  const loaded = await page.evaluate(async ({ testKey, path }) => {
    const { persistentStorage } = await import(/* @vite-ignore */ path);
    await new Promise<void>((resolve) => persistentStorage.whenReady(resolve));
    return persistentStorage.getItem(testKey);
  }, { testKey: key, path: modulePath });
  if (loaded !== 'newer-indexeddb-value') {
    fail('legacy localStorage overwrote a newer IndexedDB record');
  }

  // A new edit must persist through a page refresh, not just the memory cache.
  await page.evaluate(async ({ testKey, path }) => {
    const { persistentStorage } = await import(/* @vite-ignore */ path);
    persistentStorage.setItem(testKey, 'confirmed-saved-edit');
    await new Promise<void>((resolve, reject) => {
      const req = indexedDB.open('diwaniya_app_storage_db', 1);
      req.onerror = () => reject(req.error);
      req.onsuccess = () => {
        const db = req.result;
        const tx = db.transaction('app_keyval_store', 'readonly');
        const get = tx.objectStore('app_keyval_store').get(testKey);
        get.onsuccess = () => {
          const value = get.result?.value;
          db.close();
          if (value === 'confirmed-saved-edit') resolve();
          else reject(new Error('edit was not written to IndexedDB'));
        };
        get.onerror = () => { db.close(); reject(get.error); };
      };
    });
  }, { testKey: key, path: modulePath });

  await page.reload({ waitUntil: 'domcontentloaded' });
  const reloaded = await page.evaluate(async ({ testKey, path }) => {
    const { persistentStorage } = await import(/* @vite-ignore */ path);
    await new Promise<void>((resolve) => persistentStorage.whenReady(resolve));
    return persistentStorage.getItem(testKey);
  }, { testKey: key, path: modulePath });
  if (reloaded !== 'confirmed-saved-edit') {
    fail('newly edited IndexedDB value did not survive page refresh');
  }
  console.log('[quiz-smoke] verified IndexedDB migration and save/reload');
}

async function main(): Promise<void> {
  await loadQuestionData();
  await startApp();

  browser = await chromium.launch({
    executablePath: resolveChromium(),
    headless: true,
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  try {
    await assertPlayerPath(await context.newPage());
    await assertBrowserStorageMigration(await context.newPage());
  } finally {
    await context.close();
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  if (server && !server.killed) {
    const exit = new Promise<void>((resolve) => {
      if (server?.exitCode !== null || server?.signalCode !== null) {
        resolve();
      } else {
        server?.once('exit', () => resolve());
      }
    });

    try {
      process.kill(-server.pid!, 'SIGTERM');
    } catch {
      server.kill('SIGTERM');
    }

    await Promise.race([
      exit,
      new Promise((resolve) => setTimeout(resolve, 5_000)),
    ]);
  }
}