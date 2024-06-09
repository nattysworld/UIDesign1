

// export default {
//     root: "src",
//     publicDir: "../public",
//     build: {
//         outDir: "../build"
//     }
//  };

import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    open: true, // Automatically open the browser on server start
  },
});

