import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//const { svelte } = await import('@sveltejs/vite-plugin-svelte');

export default defineConfig({
	optimizeDeps: {
		exclude: ['@electron-forge'] // do not pre-bundle some-library
    },
	plugins: [sveltekit()]
});
