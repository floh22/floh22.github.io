import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    // Fixed at build time so prerendered HTML and hydration agree
    __BUILD_YEAR__: new Date().getFullYear(),
  },
})
