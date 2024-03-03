import type { Config } from 'tailwindcss';

const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				theme: {
					50: '#FCFAFF',
					100: '#F0EBFF',
					200: '#DBD2FE',
					300: '#B7AEF9',
					400: '#8784F0',
					500: '#333CD8',
					600: '#261FE5',
					700: '#210EB4',
					800: '#1D0481',
					900: '#000000',
					950: '#000000'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
} satisfies Config;

export default config;
