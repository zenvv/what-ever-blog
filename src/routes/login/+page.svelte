<script lang="ts">
	import * as config from '$lib/config';

	import { supabase } from '$lib/supabase/supabase';
	import { Button } from 'bits-ui';
	import { Github, LogIn } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{config.title} / login</title>
</svelte:head>

<span class="flex items-center justify-center h-full w-full relative">
	<div
		class="w-full h-[80vh] bg-theme-100 rounded-bl-[32px] rounded-tr-[32px] pattern-architect-theme-500/25 pattern-architect-scale-[1] border border-theme-500/50"
	></div>
	<div
		class="flex flex-col items-center justify-center w-fit p-4 py-10 absolute z-10 bg-theme-50 rounded-2xl border border-theme-500 shadow-[5px_5px_0] shadow-theme-600/50"
	>
		<form
			action="?/login"
			method="POST"
			class="flex flex-col justify-start items-start gap-4 w-[500px] px-8 py-2 relative"
		>
			<h1 class="mb-2 text-3xl font-bold text-theme-600">LOGIN</h1>
			<span
				class="absolute flex top-0 right-0 p-4 px-8 items-center gap-2 opacity-30 hover:opacity-80 transition-opacity"
			>
				<span class="bg-theme-500 rounded-full size-3"></span>
				<span class="bg-theme-500 rounded-full size-3"></span>
				<span class="bg-theme-500 rounded-full size-3"></span>
			</span>
			<label for="email" class="m-0 p-0 mt-4 leading-none">e-mail</label>
			<input type="email" name="email" placeholder="mike.smith@email.com" />

			<label for="pass" class="m-0 p-0 mt-4 leading-none">password</label>
			<input type="password" name="password" placeholder="********" />
			<span class="flex flex-row-reverse items-center gap-2 w-full mt-2 justify-between">
				<Button.Root type="submit" class="w-1/3"><LogIn size="16" />login</Button.Root>
				<form action="?/login&provider=github" method="POST" class="text-sm">
					<Button.Root type="submit" class="outlined">
						<Github size="14" /> login with github
					</Button.Root>
				</form>
			</span>
		</form>

		<span
			class="flex items-center justify-center w-[450px] text-sm p-6 rounded-lg mt-8 bg-theme-200/20 border border-theme-800/10"
		>
			<p>
				don't have an account yet? <Button.Root class="link" href="/register"
					>register now!</Button.Root
				>
			</p>
		</span>
	</div>
</span>
