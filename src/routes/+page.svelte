<script lang="ts">
	import Article from '$lib/components/Article/ArticleCard.svelte';
	import ArticleList from '$lib/components/Article/ArticleList.svelte';
	import * as config from '$lib/config';
	import { Avatar, Button } from 'bits-ui';
	import { Pizza } from 'lucide-svelte';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	// console.log(data);
	let userData = data.session?.user;
	let userInfo = data.users?.find((us) => us.id === userData?.id)?.username;
</script>

<svelte:head>
	<title>{config.title} / home</title>
</svelte:head>

<div class="size-full flex flex-col items-start justify-start gap-8">
	{#if data.session}
		<h1 class="font-bold text-3xl text-theme-500 flex items-center gap-2 mt-4">
			<Pizza size={28} strokeWidth={3} />
			HOME
		</h1>

		<div class="size-full">
			<ArticleList content={data.articles} />
		</div>
	{:else}
		<div
			class="bg-theme-600/80 rounded-xl p-16 size-full text-sm text-left text-theme-100 pattern-topography pattern-topography-theme-100/10 pattern-topography-scale-150 h-[79vh] flex flex-col items-start justify-start w-full min-h-full"
		>
			<span>
				<h4 class="text-3xl font-semibold mb-2">
					welcome to <strong
						class="underline decoration-wavy underline-offset-4 decoration-2 font-bold"
						>FUZZY.BRAINS</strong
					>!
				</h4>
				<p class="text-lg font-medium">
					a place where you can talk about everything you enjoy! <br />
					post, like and share all the content around
				</p>
			</span>
			<span class="h-full flex items-end">
				<p>
					<Button.Root href="/login" class="df-dark text-sm p-1">log-in</Button.Root> or
					<Button.Root href="/register" class="df-dark text-sm p-1">register</Button.Root> to join now!
				</p>
			</span>
		</div>
	{/if}
</div>
