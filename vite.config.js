import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages at /<repo>/, set `base: '/<repo>/'`.
export default defineConfig({
  plugins: [react()],
  base: './',
})
