import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) return 'vendor';
            if (id.includes('react')) return 'vendor';
            if (id.includes('framer-motion')) return 'framer-motion';
          }
          if (id.includes('src/blog/blogData.ts')) return 'blog-data';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
