import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        listings: resolve(__dirname, 'listings.html'),
        calendar: resolve(__dirname, 'calendar.html'),
        applications: resolve(__dirname, 'applications.html'),
        messages: resolve(__dirname, 'messages.html'),
        analytics: resolve(__dirname, 'analytics.html')
      }
    }
  }
});