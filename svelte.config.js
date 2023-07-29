import adapter from '@sveltejs/adapter-vercel';
import styles from 'rollup-plugin-styles';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	plugins: [styles()],
	kit: {
		adapter: adapter()
	}
};

export default config;
