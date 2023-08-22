import adapter from '@sveltejs/adapter-auto';
//const vitePreprocess = import('@sveltejs/vite-plugin-svelte').then(m => m.vitePreprocess())
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
//	preprocess: {
//        script:async (options) => (await vitePreprocess).script(options),
//        style:async (options) => (await vitePreprocess).style(options),
//    },
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		
	}
};

export default config;
