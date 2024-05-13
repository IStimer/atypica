import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-string';
export default defineConfig({
  plugins: [
    react(),
    glsl()
  ],
  css: {
    devSourcemap: true,
  },
});
