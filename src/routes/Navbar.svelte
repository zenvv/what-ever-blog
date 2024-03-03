<script lang="ts">
	import { Button } from 'bits-ui';
	 import { DropdownMenu } from "bits-ui";
	import { Edit } from 'lucide-svelte';

	export let data: any;

	let userData = data.session?.user.user_metadata;
</script>

<nav
	class="flex items-center mx-auto justify-between w-full border-b-2 border-dotted border-theme-500/25 p-4 px-6  mt-4 text-sm text-theme-900 fixed top-0 max-w-5xl"
>
	<a
		href="/"
		class="active:text-theme-400 transition-all tracking-tighter hover:tracking-normal font-semibold text-theme-500 text-lg hover:font-[800] hover:text-theme-600"
		>what-ever.blog</a
	>

	<span class="flex items-center gap-4">
		{#if data.session}
			<Button.Root href="/new"><Edit size="16" /> create</Button.Root>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
			</DropdownMenu.Root>
			<form action="/logout" method="POST">
				<Button.Root type="submit" class="outlined">sign-out</Button.Root>
			</form>
		{:else}
			<Button.Root href="/login" class="navlink">login</Button.Root>
		{/if}
	</span>
</nav>

<style lang="postcss">
	.navlink {
		@apply text-sm hover:underline decoration-theme-500 decoration-2 hover:underline-offset-4 underline-offset-8 active:text-theme-500 transition-all;
	}
</style>
