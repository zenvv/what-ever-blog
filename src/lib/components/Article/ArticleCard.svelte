<script lang="ts">
	import { supabase } from '$lib/supabase/supabase';

	export let title: string;
	export let description: string;
	export let author: string;
	export let date: Date;
	export let link: string;
</script>

<a
	href={`/post/${link}`}
	class="flex flex-col items-start justify-start border rounded hover:bg-theme-400/10 hover:shadow-lg hover:shadow-theme-500/10 transition-all hover:cursor-pointer hover:border-theme-500"
>
	<span class="p-4 leading-normal">
		<h1 class="text-theme-500 font-semibold">{title}</h1>
		<p class="text-sm text-theme-900/70">{description}</p>
	</span>

	<span class="border-t p-2 text-xs text-theme-900/60 bg-theme-100/20 w-full">
		{author} · published in {date}
	</span>
</a>
