import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_ByDW4Qz5.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/exercises.astro.mjs');
const _page1 = () => import('./pages/signups/signup.astro.mjs');
const _page2 = () => import('./pages/signups/signupfailure.astro.mjs');
const _page3 = () => import('./pages/signups/signupsuccess.astro.mjs');
const _page4 = () => import('./pages/trainers.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/exercises.astro", _page0],
    ["src/pages/signups/signup.astro", _page1],
    ["src/pages/signups/signupfailure.astro", _page2],
    ["src/pages/signups/signupsuccess.astro", _page3],
    ["src/pages/trainers.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a2cdf893-d10f-47b4-85db-1d742b590703"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
