# Replit setup

## Run the app

The project uses Vite with React and TypeScript. The Replit workflow starts the development server with:

```bash
npm run dev -- --port 5000
```

The app is available through the Replit preview.

## Firebase

Firebase Auth and Firestore are initialized from `firebase-applet-config.json`. To use a different Firebase project, provide the `VITE_FIREBASE_*` values listed in `.env.example` through the environment/secrets settings rather than committing an `.env` file.

## Checks

```bash
npm run lint
npm run build
```