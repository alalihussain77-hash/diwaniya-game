# Replit setup

## Run the app

The project uses Vite with React and TypeScript. The Replit workflow starts the development server with:

```bash
npm run dev -- --port 5000
```

The app is available through the Replit preview.

## Firebase

Firebase Auth and Firestore are initialized from `firebase-applet-config.json`. To use a different Firebase project, provide the `VITE_FIREBASE_*` values listed in `.env.example` through the environment/secrets settings rather than committing an `.env` file.

### Local testing fallback

During Vite development, the app automatically opens a browser-local guest session with five local test credits and skips Firebase Auth and Firestore calls. This fallback is disabled in production builds and does not claim to save data to Firestore. Set `VITE_ALLOW_LOCAL_GUEST_FALLBACK=false` to test real Firebase authentication locally.

### Launch verification checklist

Before sharing the quiz, confirm the following in Firebase Console for project `dewaniya-b9c7f`:

1. In Authentication → Sign-in method, enable Email/Password, Google, and Anonymous. Add the published app domain and the Replit preview domain to Authentication → Settings → Authorized domains.
2. Ensure the web app configuration uses a valid Firebase browser API key. The checked key in `firebase-applet-config.json` is currently rejected by Identity Toolkit, so authentication cannot be considered live until it is replaced with a valid key (or overridden with `VITE_FIREBASE_API_KEY`).
3. Deploy the checked-in rules before launch:

   ```bash
   npx firebase-tools deploy --only firestore:rules --project dewaniya-b9c7f
   ```

   The rules allow a signed-in user to access only `users/{their uid}` and their own `gameSessions`; all other documents are denied.
4. Smoke-test email signup/sign-in, Google sign-in, guest sign-in, a user profile read/write, a seen-question history write/read, and a completed game session write. Do not share the quiz until all six checks succeed.

The live verification on September 3, 2026 found that the previous rules allowed unauthenticated Firestore reads and writes, and the configured Auth API key was rejected. The source rules now deny unauthenticated access, but they must be deployed after Firebase credentials are corrected.

## Checks

```bash
npm run lint
npm run build
```