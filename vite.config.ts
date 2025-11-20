
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // Node.js 的 path

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // 这行就是关键！
    }
  }
})