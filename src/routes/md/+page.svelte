<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import config from '../../../svelte.config';
	let md = '';
	const plugins: Plugin[] = [];
</script>

<svelte:head>
	<title>{config.title} / MD</title>
</svelte:head>

<h1 class="text-2xl text-theme-500 font-bold">Markdown Editor</h1>

<div class="grid grid-cols-2 gap-6 h-full my-8">
	<textarea bind:value={md} />
	<span class="prose border bg-theme-600 text-theme-50 prose-blue prose-invert p-4 rounded-lg">
		<Markdown {md} />
	</span>
</div>
