

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
  build: {
    outDir: 'dist', // Output directory for build files
  },
  resolve: {
    alias: {
      'three': 'node_modules/three/build/three.module.js',
    }
  }
});