/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			'kanit': ['Kanit', 'sans-serif'],
			'One-sans': ['One-sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
