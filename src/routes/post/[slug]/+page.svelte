<script lang="ts">
	/** @type {import('./$types').PageData} */

	export let data: any;
	let article = data.articles[0];

	console.log(data);
</script>

<div class="flex flex-col items-start gap-4 mt-10 justify-start w-full text-theme-900">
	<span class="flex flex-col items-start gap-1 justify-start w-full">
		<h1 class="text-4xl font-bold text-theme-500 mb-2">{article.title}</h1>
		<h4 class="text-base text-theme-900/90">{article.description}</h4>
	</span>

	<span class="border-t flex justify-between items-start gap-2 py-4 text-sm w-full opacity-75">
		<p>Author: {article.authorId}</p>
		<p>Published in: {article.created_at}</p>
	</span>

	<span>
		{article.content}
	</span>
</div>
