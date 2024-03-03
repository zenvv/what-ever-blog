/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml, getHighlighter } from 'shiki';

import remarkUnrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (/** @type {string} */ code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['github-light', 'poimandres'],
				langs: ['typescript', 'javascript', 'svelte', 'bash', 'text', 'css', 'html']
			});
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					themes: {
						light: 'github-light',
						dark: 'poimandres'
					}
				})
			);

			return `{@html \`${html}\`}`;
		}
	},
	remarkPlugins: [[remarkUnrapImages], [remarkToc, { ordered: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		alias: {
			$comps: 'src/components',
			'@/*': './path/to/lib/*'
		}
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};
export default config;
