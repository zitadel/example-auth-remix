import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, './app'),
    },
  },
  plugins: [tailwindcss(), reactRouter()],
  server: {
    port: Number(process.env.PORT) || 3000,
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
});
