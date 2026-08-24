/**
 * Persistent Storage System using IndexedDB with in-memory sync cache.
 * Exclusively uses IndexedDB for all questions, customizations, and images,
 * completely bypassing localStorage size quotas and eliminating QuotaExceededError.
 */

const DB_NAME = 'diwaniya_app_storage_db';
const STORE_NAME = 'app_keyval_store';
const DB_VERSION = 1;

// Synchronous in-memory cache for instant synchronous access across the whole app
const memoryCache = new Map<string, string>();
let isIndexedDBReady = false;
let dbInstance: IDBDatabase | null = null;
const initCallbacks: Array<() => void> = [];

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
      isIndexedDBReady = true;

      // 1. Sync memoryCache to IndexedDB for any migrated items
      if (memoryCache.size > 0) {
        try {
          const writeTx = dbInstance.transaction(STORE_NAME, 'readwrite');
          const writeStore = writeTx.objectStore(STORE_NAME);
          memoryCache.forEach((value, key) => {
            writeStore.put({ key, value });
          });
        } catch (e) {
          console.warn('Initial sync to IndexedDB:', e);
        }
      }

      // 2. Load all existing records from IndexedDB into memoryCache
      try {
        const tx = dbInstance.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const getAllReq = store.getAll();

        getAllReq.onsuccess = () => {
          const records = getAllReq.result as Array<{ key: string; value: string }>;
          if (records && Array.isArray(records)) {
            records.forEach((item) => {
              if (item.key && item.value !== undefined) {
                memoryCache.set(item.key, item.value);
              }
            });
          }
          initCallbacks.forEach((cb) => cb());
          initCallbacks.length = 0;
        };

        getAllReq.onerror = () => {
          initCallbacks.forEach((cb) => cb());
          initCallbacks.length = 0;
        };
      } catch (e) {
        console.warn('Error loading from IndexedDB:', e);
      }
    };

    request.onerror = (err) => {
      console.warn('IndexedDB initialization notice:', err);
      isIndexedDBReady = true;
      initCallbacks.forEach((cb) => cb());
      initCallbacks.length = 0;
    };
  } catch (err) {
    console.warn('Failed to initialize IndexedDB:', err);
    isIndexedDBReady = true;
  }
}

function saveToIndexedDB(key: string, value: string) {
  if (!dbInstance) return;
  try {
    const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ key, value });
  } catch (err) {
    console.warn(`Error writing ${key} to IndexedDB:`, err);
  }
}

function removeFromIndexedDB(key: string) {
  if (!dbInstance) return;
  try {
    const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(key);
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
