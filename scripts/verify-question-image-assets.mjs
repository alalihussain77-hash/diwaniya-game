import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const sources = [
  'src/data/productsQuestions.ts',
  'src/data/generalKnowledgeBatch1.ts',
];
const regexp = /data:image\/(png|jpeg|jpg|webp|gif|avif);base64,([A-Za-z0-9+/]+={0,2})/g;

let count = 0;
let totalBytes = 0;
const names = new Set();
for (const file of sources) {
  const source = readFileSync(file, 'utf8');
  const matches = [...source.matchAll(regexp)];
  if (!matches.length) throw new Error(`No inline images found to extract in ${file}`);
  for (const match of matches) {
    const type = match[1] === 'jpg' ? 'jpeg' : match[1];
    const extension = type === 'jpeg' ? 'jpg' : type;
    const bytes = Buffer.from(match[2], 'base64');
    const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 24);
    const name = `quiz-images/${hash}.${extension}`;
    const out = path.join('dist', name);
    if (!existsSync(out)) throw new Error(`Missing extracted image ${name}`);
    const actual = readFileSync(out);
    if (!bytes.equals(actual)) throw new Error(`Extracted image differs from original: ${name}`);
    names.add(name);
    count++;
    totalBytes += bytes.length;
  }
  console.log(`[verify-images] ${file}: ${matches.length} source images verified`);
}
const scripts = readdirSync('dist/assets').filter((name) => name.endsWith('.js'));
const jsBytes = scripts.reduce((total, file) => total + readFileSync(path.join('dist/assets', file)).length, 0);
console.log(
  `[verify-images] ${count} image references, ${names.size} unique images, ${totalBytes} image bytes verified; built JS: ${(jsBytes / 1048576).toFixed(2)} MiB`
);
