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
			},
			typography: ({ theme }) => ({
				theme: {
					css: {
						'--tw-prose-body': theme('colors.theme[800]'),
						'--tw-prose-headings': theme('colors.theme[600]'),
						'--tw-prose-lead': theme('colors.theme[700]'),
						'--tw-prose-links': theme('colors.theme[400]'),
						'--tw-prose-bold': theme('colors.theme[700]'),
						'--tw-prose-counters': theme('colors.theme[600]'),
						'--tw-prose-bullets': theme('colors.theme[300]'),
						'--tw-prose-hr': theme('colors.theme[200]'),
						'--tw-prose-quotes': theme('colors.theme[300]'),
						'--tw-prose-quote-borders': theme('colors.theme[500]'),
						'--tw-prose-captions': theme('colors.theme[700]'),
						'--tw-prose-code': theme('colors.theme[900]'),
						'--tw-prose-pre-code': theme('colors.theme[900]'),
						'--tw-prose-pre-bg': theme('colors.theme[100]'),
						'--tw-prose-th-borders': theme('colors.theme[300]'),
						'--tw-prose-td-borders': theme('colors.theme[200]'),
						'--tw-prose-invert-body': theme('colors.theme[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.theme[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.theme[400]'),
						'--tw-prose-invert-bullets': theme('colors.theme[600]'),
						'--tw-prose-invert-hr': theme('colors.theme[700]'),
						'--tw-prose-invert-quotes': theme('colors.theme[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.theme[700]'),
						'--tw-prose-invert-captions': theme('colors.theme[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.theme[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.theme[600]'),
						'--tw-prose-invert-td-borders': theme('colors.theme[700]')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-patterns')]
} satisfies Config;

export default config;
