import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://yatharth-gupta.github.io',
    base: "/hosting/",
    build: {
        assets: 'astro'
      }
});
