import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// i love cats

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
});
