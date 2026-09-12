import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/laplec/
const BASE = process.env.VITE_BASE ?? '/laplec/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
