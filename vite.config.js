import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nishokkumar.github.io/',
  plugins: [react()],
})