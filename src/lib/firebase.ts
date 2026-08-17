import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, setLogLevel } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import defaultConfig from '../../firebase-applet-config.json';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || (defaultConfig as any)?.apiKey || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || (defaultConfig as any)?.authDomain || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || (defaultConfig as any)?.projectId || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || (defaultConfig as any)?.storageBucket || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || (defaultConfig as any)?.messagingSenderId || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || (defaultConfig as any)?.appId || '',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Set Firestore log level to silent to avoid console warnings during offline/transient connection states
try {
  setLogLevel('silent');
} catch (e) {
  // Ignore if already set
}

const rawDbId = (defaultConfig as any)?.firestoreDatabaseId;
const dbId = rawDbId && rawDbId !== '(default)' && rawDbId.trim() !== ''
  ? rawDbId.trim()
  : undefined;

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  ignoreUndefinedProperties: true,
  ...(dbId ? { databaseId: dbId } : {})
});

export const auth = getAuth(app);

