// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import tailwind from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    site: 'https://addexample.netlify.app',
 base: '/', 
  vite:{
    plugins:[tailwind()]
  },
  adapter: netlify()
});
