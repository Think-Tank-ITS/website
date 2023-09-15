/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/dist/*.js'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins']
			}
		},
	},
	darkMode: 'class',
	plugins: [
		require('preline/plugin'),
	],
}
