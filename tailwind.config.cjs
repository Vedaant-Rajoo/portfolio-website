/** @type {import('tailwindcss').Config}*/
import styles from 'rollup-plugin-styles';
const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	  ],

	  plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography'),
		styles(),
	  ],
	
	  darkMode: 'class',
	  
	  theme: {
		extend: {
		  colors: {
			// flowbite-svelte
			primary: {50:"#F9F5D7",100:"#FBF1C7", 200:"#EBDBB2", 300:"#D5C4A1"},
			secondary: {50: "#282828",100:"3C3836",200:"#504945",300:"#665C54"},
		  },
		  fontFamily: {
			WorkSans: ['Work Sans', 'sans-serif'],
		},
	  }
	},
};
	
module.exports = config;
