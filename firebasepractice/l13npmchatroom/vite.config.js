import {defineConfig} from "vite";

export default defineConfig({
     server:{
          watch:{
               usePolling: true
          }
     },
     publicDir: '../public/',
     root: './src',
     build:{
          outDir: "../dist" // define the output directory for to build files
     }
});