/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			'kanit': ['Kanit', 'sans-serif'],
			'One-sans': ['One-sans', 'sans-serif'],
			'barlow': ['Barlow', 'sans-serif'],
		},
		extend: {
			colors: {
				'dolar': '#2DCF57',
				'dolar-palid': '#E4F4E8',
				'dolar-dark': '#242424',
			}
		},
	},
	plugins: [],
}
