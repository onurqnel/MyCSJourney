import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import markdownItMathjax from 'markdown-it-mathjax3';

// Astro configuration
export default defineConfig({
  integrations: [tailwind(), icon()],
  markdown: {
    extendDefaultPlugins: true,
    markdownItSetup(md) {
      md.use(markdownItMathjax());
    },
  },
});
