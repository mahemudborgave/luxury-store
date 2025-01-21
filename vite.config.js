// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // Accessible on the local network
        port: 5173, // Default Vite dev server port
    },
    build: {
        outDir: 'dist', // Output directory for production files
        sourcemap: true, // Enable sourcemaps for debugging in production
    },
    base: '/', // Set base URL for deployment
    envDir: './env', // Directory for environment variable files
});

