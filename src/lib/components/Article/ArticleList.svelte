<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';

	export let content: any[] = [];
</script>

<span class="size-full grid grid-cols-2 gap-4 transition-all">
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
