/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'green': '#A0C885',
			'green-light': '#C6DFB7',
			'black': '#424444',
			'slate-200': '#E2E8F0',
			'slate-300': '#CBD5E1',
			'slate-400': '#94A3B8',
			'slate-500': '#64748B',
			'slate-600': '#475569',
			'slate-700': '#334155',
			'slate-800': '#1E293B',
			'slate-900': '#0F172A',
		},
		fontFamily: {
			serif: ['Steppe', 'serif'],
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
	purge: {
		enabled: true,
		content: [
			'./**/*.html'
		]
	}
}
