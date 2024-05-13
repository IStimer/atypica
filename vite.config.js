import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import glsl from 'vite-plugin-string';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    glsl()
  ],
  resolve: {
  },
  css: {
    devSourcemap: true,
  },
});
