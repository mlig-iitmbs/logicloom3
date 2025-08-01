import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  //site: 'https://logicloom.iitmparadox.org',
  site: 'https://mlig-iitmbs.github.io',
  base: 'logicloom3',
  integrations: [mdx(), sitemap(), tailwind()]
});
