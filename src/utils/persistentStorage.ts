/**
 * Persistent Storage System using IndexedDB with in-memory sync cache.
 * Stores questions and images in IndexedDB with a synchronous memory cache.
 * Legacy localStorage entries are migrated without overwriting newer IndexedDB values.
 */

const DB_NAME = 'diwaniya_app_storage_db';
const STORE_NAME = 'app_keyval_store';
const DB_VERSION = 1;

// Synchronous in-memory cache for instant synchronous access across the whole app
const memoryCache = new Map<string, string>();
let isIndexedDBReady = false;
let dbInstance: IDBDatabase | null = null;
const initCallbacks: Array<() => void> = [];
// Writes made while IndexedDB is opening must win over stale records loaded later.
const pendingChanges = new Map<string, { value: string | null }>();
let clearRequested = false;
let clearVersion = 0;

function notifyReady() {
  isIndexedDBReady = true;
  initCallbacks.splice(0).forEach((cb) => cb());
}

// Initialize memory cache: copy and preserve ALL data from localStorage and IndexedDB seamlessly
if (typeof window !== 'undefined') {
  try {
    // Copy all current data into memory cache without deleting or modifying existing entries
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const val = localStorage.getItem(key);
        if (val !== null) {
          memoryCache.set(key, val);
        }
      }
    }
  } catch (err) {
    console.warn('Safe sync from storage:', err);
  }

  // Initialize IndexedDB
  initIndexedDB();
}

function initIndexedDB() {
  if (typeof window === 'undefined' || !window.indexedDB) {
    isIndexedDBReady = true;
    return;
  }

  try {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };

    request.onsuccess = (event: Event) => {
      dbInstance = (event.target as IDBOpenDBRequest).result;
      const db = dbInstance;
      const tx = db.transaction(STORE_NAME, 'readonly');
      const getAllReq = tx.objectStore(STORE_NAME).getAll();

      getAllReq.onsuccess = () => {
        const records = (getAllReq.result || []) as Array<{ key: string; value: string }>;
        const storedKeys = new Set<string>();
        for (const record of records) {
          if (!record || typeof record.key !== 'string') continue;
          storedKeys.add(record.key);
          // Existing IndexedDB data wins over an older localStorage copy.
          if (!clearRequested && !pendingChanges.has(record.key)) {
            memoryCache.set(record.key, record.value);
          }
        }

        // Migrate legacy data once. Replay writes made during initialization
        // until the queue is empty, including writes made during a transaction.
        const legacyMissing = new Map<string, string>();
        if (!clearRequested) {
          for (const [key, value] of memoryCache) {
            if (!storedKeys.has(key) && !pendingChanges.has(key)) {
              legacyMissing.set(key, value);
            }
          }
        }
        let firstFlush = true;
        const flush = () => {
          const changes = new Map(pendingChanges);
          const clearForThisFlush = clearRequested;
          const clearAtVersion = clearVersion;
          try {
            const writeTx = db.transaction(STORE_NAME, 'readwrite');
            const store = writeTx.objectStore(STORE_NAME);
            if (clearForThisFlush) {
              store.clear();
            } else if (firstFlush) {
              for (const [key, value] of legacyMissing) {
                if (!changes.has(key)) store.put({ key, value });
              }
            }
            firstFlush = false;
            for (const [key, change] of changes) {
              if (change.value === null) store.delete(key);
              else store.put({ key, value: change.value });
            }
            writeTx.oncomplete = () => {
              // Only discard a queued write if it was actually included.
              for (const [key, change] of changes) {
                if (pendingChanges.get(key) === change) pendingChanges.delete(key);
              }
              if (clearVersion === clearAtVersion) clearRequested = false;
              if (pendingChanges.size > 0 || clearRequested) flush();
              else notifyReady();
            };
            writeTx.onerror = () => {
              console.error('Could not finish IndexedDB initialization:', writeTx.error);
              notifyReady();
            };
            writeTx.onabort = () => {
              console.error('IndexedDB initialization transaction aborted:', writeTx.error);
              notifyReady();
            };
          } catch (err) {
            console.error('Could not migrate question storage:', err);
            notifyReady();
          }
        };
        flush();
      };
      getAllReq.onerror = () => {
        console.error('Could not read saved question data:', getAllReq.error);
        notifyReady();
      };
    };

    request.onerror = (err) => {
      console.warn('IndexedDB initialization notice:', err);
      notifyReady();
    };
  } catch (err) {
    console.warn('Failed to initialize IndexedDB:', err);
    notifyReady();
  }
}

function saveToIndexedDB(key: string, value: string) {
  if (!dbInstance || !isIndexedDBReady) {
    pendingChanges.set(key, { value });
    return;
  }
  try {
    const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ key, value });
    tx.onerror = () => console.error('IndexedDB save failed:', key, tx.error);
  } catch (err) {
    console.warn(`Error writing ${key} to IndexedDB:`, err);
  }
}

function removeFromIndexedDB(key: string) {
  if (!dbInstance || !isIndexedDBReady) {
    pendingChanges.set(key, { value: null });
    return;
  }
  try {
    const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(key);
    tx.onerror = () => console.error('IndexedDB removal failed:', key, tx.error);
  } catch (err) {
    console.warn(`Error removing ${key} from IndexedDB:`, err);
  }
}

export const persistentStorage = {
  /**
   * Synchronously get item from in-memory cache (backed by IndexedDB)
   */
  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    return memoryCache.get(key) || null;
  },

  /**
   * Store item exclusively in Memory Cache + IndexedDB (Unlimited quota, zero QuotaExceededError)
   */
  setItem(key: string, value: string): void {
    if (typeof window === 'undefined') return;

    // 1. Update in-memory cache immediately for instantaneous synchronous reads
    memoryCache.set(key, value);

    // 2. Persist permanently to IndexedDB
    saveToIndexedDB(key, value);
  },

  /**
   * Remove item from memory cache and IndexedDB
   */
  removeItem(key: string): void {
    if (typeof window === 'undefined') return;

    memoryCache.delete(key);
    removeFromIndexedDB(key);
  },

  /**
   * Clear all category & custom question items
   */
  clearAllCustomQuestions(): void {
    if (typeof window === 'undefined') return;
    memoryCache.clear();
    if (!isIndexedDBReady) {
      clearRequested = true;
      clearVersion += 1;
      pendingChanges.clear();
      return;
    }
    if (dbInstance) {
      try {
        const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.clear();
      } catch (err) {
        console.warn('Error clearing IndexedDB:', err);
      }
    }
  },

  /**
   * Wait until IndexedDB records are fully loaded into memory (optional helper)
   */
  whenReady(callback: () => void): void {
    if (isIndexedDBReady) {
      callback();
    } else {
      initCallbacks.push(callback);
    }
  }
};
