import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	plugins: [],

	kit: {
		adapter: adapter()
	},

	preprocess: [vitePreprocess({})]
};

export default config;
