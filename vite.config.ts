import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

// Leave the original question files and their image bytes untouched.
// At build time, move inline base64 images into individual static files,
// so opening the game doesn't download every question image at once.
// The dev middleware serves the same generated URLs without writing files.
function questionImageAssets(): Plugin {
  const assets = new Map<string, { bytes: Buffer; mime: string }>();
  let base = '/';
  let foundImages = 0;
  const inlineImage = /data:image\/(png|jpeg|jpg|webp|gif|avif);base64,([A-Za-z0-9+/]+={0,2})/g;

  return {
    name: 'diwaniya-question-image-assets',
    enforce: 'pre',
    configResolved(config) {
      base = config.base;
    },
    transform(source, id) {
      const filename = id.split('?')[0].replace(/\\/g, '/');
      if (
        !filename.endsWith('/src/data/productsQuestions.ts') &&
        !filename.endsWith('/src/data/generalKnowledgeBatch1.ts')
      ) return null;

      let replaced = 0;
      const output = source.replace(inlineImage, (_dataUrl, imageType: string, encoded: string) => {
        const bytes = Buffer.from(encoded, 'base64');
        const type = imageType === 'jpg' ? 'jpeg' : imageType;
        const extension = type === 'jpeg' ? 'jpg' : type;
        const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 24);
        const name = `quiz-images/${hash}.${extension}`;
        if (!assets.has(name)) assets.set(name, { bytes, mime: `image/${type}` });
        replaced += 1;
        return `${base.replace(/\/$/, '')}/${name}`;
      });

      foundImages += replaced;
      return replaced > 0 ? { code: output, map: null } : null;
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url || '').split('?')[0];
        const prefix = `${base.replace(/\/$/, '')}/quiz-images/`;
        if (!pathname.startsWith(prefix)) return next();
        const entry = assets.get(pathname.slice(base.replace(/\/$/, '').length + 1));
        if (!entry) return next();
        res.setHeader('Content-Type', entry.mime);
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.end(entry.bytes);
      });
    },
    generateBundle() {
      for (const [fileName, asset] of assets) {
        this.emitFile({ type: 'asset', fileName, source: asset.bytes });
      }
      console.log(
        `[quiz-images] Externalized ${foundImages} inline images into ${assets.size} static assets`
      );
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [questionImageAssets(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
