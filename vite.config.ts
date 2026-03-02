import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    federation({
      name: 'mahjong',
      filename: 'mahjong.js',
      exposes: {
        './mf': './src/mf.tsx',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  server: {
    cors: true,
  },
})
