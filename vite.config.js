import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/FlashCard-Generator/', // ✅ Note: leading and trailing slash
  plugins: [react()],
})

  // server: {
  //   host: true, // Allows your dev server to be accessible externally (e.g., from your phone)
  // },
 
