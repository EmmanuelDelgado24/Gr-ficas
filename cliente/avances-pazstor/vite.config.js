import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({

  server: {
    host: '0.0.0.0',     // Escuchar en todas las interfaces
    port: 5173           // (o el puerto que uses)
  },

  plugins: [react(), tailwindcss(), flowbiteReact()],
})