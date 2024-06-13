import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set the root directory to src
  build: {
    outDir: '../dist', // Output directory for build files
  },
  resolve: {
    alias: {
      'three': 'node_modules/three/build/three.module.js'
    }
  }
});
