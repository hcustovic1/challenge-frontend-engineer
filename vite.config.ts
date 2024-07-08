import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // exclude mockServiceWorker.js file from production build
  publicDir: command === 'build' ? false : 'public',
}));
