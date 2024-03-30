<script lang="ts">
	/** @type {import('./$types').PageData} */

	import Markdown from 'svelte-exmarkdown';

	export let data: any;
	let article = data.articles[0];

	let nowDate = new Date(article.created_at);
	let formatedDate = nowDate.toLocaleString('pt-BR', {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
		hour12: false
	});
</script>

<div class="absolute -z-10 top-0 w-screen h-[470px] left-[50%] translate-x-[-50%]">
	<img
		src="https://picsum.photos/2000"
		alt="bg"
		class="size-full object-cover opacity-30 mix-blend-color-burn saturate-0"
	/>
</div>

<div class="flex flex-col items-start gap-8 my-20 mt-12 justify-start w-full text-theme-900 z-10">
	<span class="flex flex-col items-start gap-1 justify-start w-full">
		<span class="text-sm w-full text-theme-700/75 mb-2 font-[600]">
			{formatedDate} ✷ {article.users.username}
		</span>
		<h1 class="text-6xl uppercase font-[800] tracking-tight text-theme-700 mb-2 text-balance">
			{article.title}
		</h1>

		<h4 class="text-sm text-theme-800/60 font-semibold text-pretty">{article.description}</h4>
	</span>
	<div class="grid grid-cols-3 gap-10 mt-20">
		<span class="prose max-w-fit prose-theme col-span-2">
			<Markdown md={article.content} />
		</span>
		<span class="h-max w-full col-span-1 border-dashed border-2 rounded-xl p-4 sticky top-28">
			<h4 class="text-sm text-theme-800 font-semibold">table of contents</h4>
		</span>
	</div>
</div>
