// import conf from './src/conf/conf';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config()
console.log(process.env.VITE_APPWRITE_URL);
console.log(process.env.VITE_APPWRITE_PROJECT_ID)
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: process.env.VITE_APPWRITE_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});









