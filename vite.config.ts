import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    tailwindcss(),
    react(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './app/javascript'),
      '@components': path.resolve(__dirname, './app/javascript/components'),
      '@shared': path.resolve(__dirname, './app/javascript/shared'),
      '@entrypoints': path.resolve(__dirname, './app/javascript/entrypoints'),
    }
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3036,
    allowedHosts: ['vite', 'localhost'],
    hmr: {
      clientPort: 3036,
    },
  }
})
