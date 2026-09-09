import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Relative base + single-file output means the built site works from any
// folder or static host, and even opened directly from disk.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
});
