<script lang="ts">
	import { flyAndScale } from '$lib/utils';
	import { Avatar, Button } from 'bits-ui';
	import { DropdownMenu } from 'bits-ui';
	import { Edit, LogIn, LogOut, SquareUserRound } from 'lucide-svelte';
	import { elasticIn, elasticInOut, elasticOut, expoInOut, quadInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let data: any;
	let { supabase } = data;
	$: ({ supabase } = data);

	let userData = data.session?.user;
	console.log(userData);
</script>

<nav
	class="flex items-center mx-auto justify-between w-full border-b-2 border-dotted border-theme-500/25 py-4 mt-4 text-sm text-theme-900 fixed top-0 max-w-4xl bg-theme-50/50 backdrop-blur-xl"
>
	<a
		href="/"
		class="active:text-theme-400 transition-all tracking-tighter hover:tracking-normal font-semibold text-theme-500 text-lg hover:font-[800] hover:text-theme-600"
		>what-ever.blog</a
	>

	<span class="flex items-center gap-2">
		{#if data.session}
			<Button.Root href="/new"><Edit size="16" />create</Button.Root>

			<DropdownMenu.Root loop>
				<DropdownMenu.Trigger
					class="size-8 border rounded bg-theme-300 hover:border-theme-500 transition-all flex items-center justify-center text-theme-50 text-sm text-theme-800/50 font-semibold overflow-hidden hover:text-theme-500"
				>
					<Avatar.Root>
						{#if userData.user_metadata.avatar_url !== null}
							<Avatar.Image src={`${userData.user_metadata.avatar_url}`} />
						{/if}
						<Avatar.Fallback>{userData.email.slice(0, 1)}</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content
					transition={slide}
					align="end"
					transitionConfig={{ duration: 250, easing: expoInOut }}
					sideOffset={8}
					class=" bg-theme-50 border shadow-[3px_3px_0] shadow-theme-800 border-theme-800 min-w-[200px] p-2 rounded"
				>
					<DropdownMenu.Label class="p-2 font-semibold flex flex-col gap-1 leading-none text-sm">
						<span>{userData.email}</span>
					</DropdownMenu.Label>
					<DropdownMenu.Separator class="my-1 block h-px bg-theme-500" />
					<DropdownMenu.Group>
						<DropdownMenu.Item
							class="text-theme-900 font-semibold hover:bg-theme-200 rounded hover:font-bold p-2 hover:text-theme-500 cursor-pointer text-sm"
						>
							<a href="/profile" class="flex items-center justify-start gap-2">
								<SquareUserRound size="16" /> profile
							</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							class="text-theme-900 hover:text-red-600 font-semibold hover:bg-red-100 rounded hover:font-bold p-2 cursor-pointer text-sm"
						>
							<form action="/logout" method="POST">
								<button class="flex items-center justify-start gap-2" type="submit"
									><LogOut size="16" /> sign-out</button
								>
							</form>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<Button.Root href="/login" class="navlink"><LogIn size="16" />login</Button.Root>
		{/if}
	</span>
</nav>
