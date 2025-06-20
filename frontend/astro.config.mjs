// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import tailwind from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://jebersole13.github.io', 
  base: '/astrodjangoexample',
  vite:{
    plugins:[tailwind()]
  },
  adapter: netlify()
});
