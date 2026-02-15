import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  site: 'https://lmdso-lp.github.io',
  // base: '/lmdso-lp',
  integrations: [tailwind()],
});
