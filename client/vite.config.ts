import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: { usePolling: true },
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
