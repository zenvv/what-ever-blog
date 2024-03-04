<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';

	export let content: any[] = [];
</script>

<span class="grid w-full grid-cols-2 gap-3 h-full">
	{#each content as art}
		<ArticleCard
			title={art.title}
			description={art.description}
			author={art.users.username}
			date={art.created_at}
			link={art.id}
		/>
	{/each}
</span>
