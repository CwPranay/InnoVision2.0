import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the Vercel output directory
  },
  server: {
    port: 3000,
  },
});
