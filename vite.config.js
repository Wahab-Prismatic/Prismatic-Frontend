import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true, 
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        manualChunks: {
          react: ['react', 'react-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          otherLibraries: ['axios', 'formik', 'yup', 'swiper'],
        },
      }
    }
  },
  optimizeDeps: {
    // include: ['shimmer-effects-react'],
    include: ['react', 'react-dom', '@reduxjs/toolkit', 'react-redux'],
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.webp'],
  plugins: [react(), compression()],
})
