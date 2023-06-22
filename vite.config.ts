import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        error: path.resolve(__dirname, '404.html')
      }
    }
  }
})
