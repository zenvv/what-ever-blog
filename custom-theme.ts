import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-surface-50)',
		'--theme-rounded-base': '6px',
		'--theme-rounded-container': '6px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #e49c21
		'--color-primary-50': '251 240 222', // #fbf0de
		'--color-primary-100': '250 235 211', // #faebd3
		'--color-primary-200': '248 230 200', // #f8e6c8
		'--color-primary-300': '244 215 166', // #f4d7a6
		'--color-primary-400': '236 186 100', // #ecba64
		'--color-primary-500': '228 156 33', // #e49c21
		'--color-primary-600': '205 140 30', // #cd8c1e
		'--color-primary-700': '171 117 25', // #ab7519
		'--color-primary-800': '137 94 20', // #895e14
		'--color-primary-900': '112 76 16', // #704c10
		// secondary | #6845e8
		'--color-secondary-50': '232 227 252', // #e8e3fc
		'--color-secondary-100': '225 218 250', // #e1dafa
		'--color-secondary-200': '217 209 249', // #d9d1f9
		'--color-secondary-300': '195 181 246', // #c3b5f6
		'--color-secondary-400': '149 125 239', // #957def
		'--color-secondary-500': '104 69 232', // #6845e8
		'--color-secondary-600': '94 62 209', // #5e3ed1
		'--color-secondary-700': '78 52 174', // #4e34ae
		'--color-secondary-800': '62 41 139', // #3e298b
		'--color-secondary-900': '51 34 114', // #332272
		// tertiary | #24c6bb
		'--color-tertiary-50': '222 246 245', // #def6f5
		'--color-tertiary-100': '211 244 241', // #d3f4f1
		'--color-tertiary-200': '200 241 238', // #c8f1ee
		'--color-tertiary-300': '167 232 228', // #a7e8e4
		'--color-tertiary-400': '102 215 207', // #66d7cf
		'--color-tertiary-500': '36 198 187', // #24c6bb
		'--color-tertiary-600': '32 178 168', // #20b2a8
		'--color-tertiary-700': '27 149 140', // #1b958c
		'--color-tertiary-800': '22 119 112', // #167770
		'--color-tertiary-900': '18 97 92', // #12615c
		// success | #56c82d
		'--color-success-50': '230 247 224', // #e6f7e0
		'--color-success-100': '221 244 213', // #ddf4d5
		'--color-success-200': '213 241 203', // #d5f1cb
		'--color-success-300': '187 233 171', // #bbe9ab
		'--color-success-400': '137 217 108', // #89d96c
		'--color-success-500': '86 200 45', // #56c82d
		'--color-success-600': '77 180 41', // #4db429
		'--color-success-700': '65 150 34', // #419622
		'--color-success-800': '52 120 27', // #34781b
		'--color-success-900': '42 98 22', // #2a6216
		// warning | #e99a2b
		'--color-warning-50': '252 240 223', // #fcf0df
		'--color-warning-100': '251 235 213', // #fbebd5
		'--color-warning-200': '250 230 202', // #fae6ca
		'--color-warning-300': '246 215 170', // #f6d7aa
		'--color-warning-400': '240 184 107', // #f0b86b
		'--color-warning-500': '233 154 43', // #e99a2b
		'--color-warning-600': '210 139 39', // #d28b27
		'--color-warning-700': '175 116 32', // #af7420
		'--color-warning-800': '140 92 26', // #8c5c1a
		'--color-warning-900': '114 75 21', // #724b15
		// error | #c83c66
		'--color-error-50': '247 226 232', // #f7e2e8
		'--color-error-100': '244 216 224', // #f4d8e0
		'--color-error-200': '241 206 217', // #f1ced9
		'--color-error-300': '233 177 194', // #e9b1c2
		'--color-error-400': '217 119 148', // #d97794
		'--color-error-500': '200 60 102', // #c83c66
		'--color-error-600': '180 54 92', // #b4365c
		'--color-error-700': '150 45 77', // #962d4d
		'--color-error-800': '120 36 61', // #78243d
		'--color-error-900': '98 29 50', // #621d32
		// surface | #2d3449
		'--color-surface-50': '224 225 228', // #e0e1e4
		'--color-surface-100': '213 214 219', // #d5d6db
		'--color-surface-200': '203 204 210', // #cbccd2
		'--color-surface-300': '171 174 182', // #abaeb6
		'--color-surface-400': '108 113 128', // #6c7180
		'--color-surface-500': '45 52 73', // #2d3449
		'--color-surface-600': '41 47 66', // #292f42
		'--color-surface-700': '34 39 55', // #222737
		'--color-surface-800': '27 31 44', // #1b1f2c
		'--color-surface-900': '22 25 36' // #161924
	}
};
