import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// import typeWriter from 
// import Typewriter from "typewriter-effect";

// https://astro.build/config
export default defineConfig({
  site: 'https://yatharth-gupta.github.io',
  base: "/hosting/",
  output: "static",
  build: {
    assets: 'astro',
  },
  // vite: {
  //   build:{
  //     rollupOptions: {
  //       output: {
  //         assetFileNames: 'assets/asset.[hash][extname]',
  //       },
  //     }
  //   }
  // },
  integrations: [react()]
});
