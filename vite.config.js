import { sveltekit } from '@sveltejs/kit/vite';
import styles from 'rollup-plugin-styles';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
};

export default config;
