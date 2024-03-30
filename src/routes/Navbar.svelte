<script lang="ts">
	import { flyAndScale } from '$lib/utils';
	import { Avatar, Button, Dialog } from 'bits-ui';
	import { DropdownMenu } from 'bits-ui';
	import { Edit, HandMetal, LogIn, LogOut, Search, SquareUserRound } from 'lucide-svelte';
	import { expoInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';

	export let data: any;
	let { supabase } = data;
	$: ({ supabase } = data);

	let userData = data.session?.user;
	console.log(userData);
</script>

<nav
	class="flex items-center mx-auto justify-between w-full outline-dashed outline-2 -outline-offset-[6px] outline-theme-500/25 p-5 px-7 rounded-xl mt-5 text-sm text-theme-900 fixed z-20 top-0 max-w-4xl bg-theme-300/25 backdrop-blur-xl"
>
	<a
		href="/"
		class="active:text-theme-400 transition-all tracking-[-0.02rem] hover:tracking-wide font-[800] text-theme-500 text-lg hover:font-[900] hover:text-theme-600 group flex items-center gap-2 justify-start"
	>
		<HandMetal size="20" strokeWidth={2.75} />
		FUZZY.BRAINS
	</a>

	<span class="flex items-center gap-2">
		{#if data.session}
			<Dialog.Root>
				<Dialog.Trigger>
					<Button.Root class="secondary">
						<Search strokeWidth={3} size="16" />search
					</Button.Root>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay
						transition={fade}
						transitionConfig={{ duration: 150 }}
						class="fixed inset-0 z-50 bg-theme-900/20"
					/>
					<Dialog.Content
						transition={flyAndScale}
						class="fixed left-[50%] top-20 z-50 w-full translate-x-[-50%] outline-none max-w-3xl bg-transparent border-none"
					>
						<input
							type="search"
							placeholder="search..."
							class="text-xl p-8 bg-transparent border-none outline-none"
						/>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>

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
					class=" bg-theme-100/85 border backdrop-blur-lg border-theme-400 min-w-[200px] p-2 rounded-lg shadow-lg z-50 shadow-theme-500/10"
				>
					<DropdownMenu.Label class="p-2 font-semibold flex flex-col gap-1 leading-none text-sm">
						<span>{userData.email}</span>
					</DropdownMenu.Label>
					<DropdownMenu.Separator class="my-1 block h-px bg-theme-200" />
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
