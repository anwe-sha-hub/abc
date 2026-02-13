import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // ignore common sync/temp folders and large directories to avoid endless restarts
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.cache/**',
        '**/.DS_Store',
        '**/Thumbs.db',
        '**/public/videos/**',
        '**/*~',
        '**/~*',
        '**/*.tmp',
        '**/OneDrive/**'
      ]
    }
  }
})
