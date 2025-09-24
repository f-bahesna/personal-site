import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/f-bahesna/personal-site.git/', // Replace with your repository name
  plugins: [vue()]
})
