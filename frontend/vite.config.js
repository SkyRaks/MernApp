import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: { // whenever we visit /api we prefix it with localhost stuff
    proxy:{
      "/api":{
        target: "http://localhost:5000"
      }
    }
  }

  
})
