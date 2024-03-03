<script lang="ts">
	import Article from '$lib/components/Article/ArticleCard.svelte';
	import ArticleList from '$lib/components/Article/ArticleList.svelte';
	import * as config from '$lib/config';
	import { Button } from 'bits-ui';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
</script>

<svelte:head>
	<title>{config.title} / home</title>
</svelte:head>

<div class="size-full flex flex-col items-start justify-start gap-8">
	{#if data.session}
		<div class="flex flex-col items-start min-w-full justify-start mt-8">
			<span class="leading-none flex flex-col items-start">
				<h4 class="text-2xl font-semibold text-secondary-foreground">
					welcome, <strong
						class="font-bold text-theme-500 underline underline-offset-4 decoration-[3px]"
						>{data.session.user.user_metadata.name || 'User'}</strong
					>
				</h4>
				<h1 class="text-lg text-theme-900/80">read the latest posts bellow!</h1>
			</span>
		</div>
	{:else}
		<span class=" bg-theme-200/20 p-8 w-full text-sm text-center text-theme-800">
			<p>
				Please <Button.Root href="/login" class="link">log-in</Button.Root> or <Button.Root
					href="/register"
					class="link">register</Button.Root
				> to create and like articles
			</p>
		</span>
	{/if}

	<div class="w-full">
		<ArticleList content={data.articles} />
	</div>
</div>
