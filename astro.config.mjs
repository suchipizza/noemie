// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served as a GitHub project site: https://suchipizza.github.io/noemie/
// If you move to a custom domain or a user site, set `base` to '/' and update `site`.
export default defineConfig({
  site: 'https://suchipizza.github.io',
  base: '/noemie',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
