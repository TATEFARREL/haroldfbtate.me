import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/haroldfbtate.me/' : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 47321,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
