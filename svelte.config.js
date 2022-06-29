import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte/types/compiler/preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		})
	]
};

export default config;
