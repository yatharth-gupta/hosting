import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://yatharth-gupta.github.io',
  base: "/hosting/",
  build: {
    assets: 'astro'
  },
  integrations: [react()]
});