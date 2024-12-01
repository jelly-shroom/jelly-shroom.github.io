import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// i love cats

const isBioluminescence = process.env.VERSION === 'bioluminescence';


// https://astro.build/config
export default defineConfig({
  srcDir: isBioluminescence ? './bioluminescence' : './src',
  base: isBioluminescence ? '/bioluminescence' : '/',

  integrations: [svelte(), mdx()],
});
