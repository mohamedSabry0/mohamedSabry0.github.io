import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Set `src/` as the root directory for development
  build: {
    outDir: '../dist', // Output production build to `dist/`
    rollupOptions: {
      input: './src/index.html', // Entry point for the app
    },
    assetsDir: '', // Place all assets in the root of `dist/`
  },
  server: {
    open: true, // Open the browser when starting the dev server
  },
});
