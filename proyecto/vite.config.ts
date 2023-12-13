import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Cambia el puerto según sea necesario
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Agrega las dependencias de React
  },
})