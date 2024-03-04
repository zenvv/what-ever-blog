<script lang="ts">
	import * as config from '$lib/config';
	import { Button } from 'bits-ui';

	import { Github, KeyRound } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{config.title} / register</title>
</svelte:head>

<div class="flex items-center justify-center h-full w-full relative">
	<div
		class="w-full h-[80vh] bg-theme-100 rounded-bl-[32px] rounded-tr-[32px] pattern-topography-theme-500/20 pattern-topography-scale-[1.25] border border-theme-500/50"
	></div>
	<div
		class="flex flex-col items-center justify-center w-fit p-4 py-10 absolute z-10 bg-theme-50 rounded-2xl border border-theme-500 shadow-[5px_5px_0] shadow-theme-600/50"
	>
		<form
			action="?/register"
			method="POST"
			class="flex flex-col gap-4 w-[500px] py-2 px-8 relative"
		>
			<span
				class="absolute flex top-0 right-0 p-4 px-8 items-center gap-2 opacity-30 hover:opacity-80 transition-opacity"
			>
				<span class="bg-theme-500 rounded-full size-3"></span>
				<span class="bg-theme-500 rounded-full size-3"></span>
				<span class="bg-theme-500 rounded-full size-3"></span>
			</span>
			<h1 class="mb-3 text-theme-500 text-3xl font-bold">REGISTER</h1>

			<label for="email" class="leading-none m-0 p-0 mt-4">e-mail</label>
			<input type="email" name="email" placeholder="mike.smith@email.com" />

			<label for="pass" class="leading-none m-0 p-0 mt-4">password</label>
			<input type="password" name="password" placeholder="********" />

			<Button.Root type="submit" class="self-end mt-2 w-1/3"
				><KeyRound size="16" /> register</Button.Root
			>
		</form>

		<span
			class="flex items-center justify-center w-[450px] text-sm p-6 rounded-lg mt-8 bg-theme-200/20 border border-theme-800/10"
		>
			<p>
				already have an account? <Button.Root class="link" href="/login">login</Button.Root>
			</p>
		</span>
	</div>
</div>
