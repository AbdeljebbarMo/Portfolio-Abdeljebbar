import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ⚠️ Remplace "Portfolio-Abdeljebbar" par le nom EXACT de ton repo GitHub
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio-Abdeljebbar/',
})
