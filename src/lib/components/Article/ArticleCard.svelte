<script lang="ts">
	import { supabase } from '$lib/supabase/supabase';
	import { BookOpenText } from 'lucide-svelte';

	export let title: string;
	export let description: string;
	export let author: string;
	export let date: string;
	export let link: string;

	let nowDate = new Date(date);
	let formatedDate = nowDate.toLocaleString('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
		hour12: false,
		hour: '2-digit',
		minute: '2-digit'
	});
</script>

<a
	href={`/post/${link}`}
	class="flex items-start flex-col justify-start rounded-xl rounded-tl-none rounded-br-none hover:bg-theme-500 hover:text-theme-50 text-theme-500 w-full min-h-full max-h-80 transition-all hover:cursor-pointer group relative outline outline-theme-200 outline-1 hover:-outline-offset-[6px] hover:outline-dashed overflow-hidden"
>
	<img
		src="https://picsum.photos/800"
		alt="placeholder"
		class="object-cover w-full h-40 transition-all group-hover:h-28 border-b flex items-center justify-center bg-theme-200 group-hover:saturate-0 group-hover:opacity-50"
	/>
	<span
		class="absolute bottom-0 right-0 m-6 border border-theme-200 text-theme-200 p-1 px-2 rounded-md flex items-center justify-center group-hover:opacity-100 opacity-0 text-xs group-hover:scale-y-100 scale-y-0 transition-all gap-2"
	>
		<BookOpenText size="14" /> read now
	</span>
	<div class="p-6 h-40">
		<span class="text-xs opacity-60 w-full">
			by: {author} · published in {formatedDate}
		</span>
		<h1 class="font-semibold text-base mb-2 group-hover:text-lg transition-all">
			{title}
		</h1>

		<p class="text-xs opacity-80 line-clamp-2">
			{description}
		</p>
	</div>
</a>
