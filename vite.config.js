// import conf from './src/conf/conf';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config()


// console.log(conf.appwriteProjectId);
// console.log("he");
// console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log(process.env.VITE_APPWRITE_URL);
console.log(process.env.VITE_APPWRITE_PROJECT_ID)








// https://vite.dev/config/n
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import  conf from './src/conf/conf'

// export default defineConfig({
//   server: {
//     proxy: {
//       '/v1': {
//         // target: import.meta.env.VITE_APPWRITE_URL,
//         //  // Use Appwrite URL from .env
//         target: conf.appwriteUrl,
//         changeOrigin: true,
//         secure: false, // Allow non-HTTPS requests if using local
//       },
//     },
//   },
// });


// import { defineConfig } from 'vite';
//  import react from '@vitejs/plugin-react'
//   import  conf from './src/conf/conf'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/v1': {
//         target:conf.appwriteUrl , // Use environment variable directly
//         changeOrigin: true,
//         secure: false, // Allow non-HTTPS requests if using local
//       },
//     },
//   },
// });


