<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/azeret-mono';

	import Transition from './transition.svelte';
	import { page } from '$app/stores';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	import { Button } from 'bits-ui';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
			invalidateAll();
			console.log('Auth state change detected. ');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="w-full mx-auto max-w-4xl min-h-screen flex flex-col justify-between items-center">
	<Navbar {data} />

	<div class="size-full flex-1 mt-28">
		<Transition url={$page.url.href}>
			<slot />
		</Transition>
	</div>

	<footer
		class="w-full flex items-center justify-end py-6 text-xs opacity-60 hover:opacity-100 transition-opacity font-normal"
	>
		created by <Button.Root
			href="https://www.github.com/zenvv"
			target="_blank"
			class="link ml-2 font-normal group"
			>zenvv
		</Button.Root>
	</footer>
</div>
