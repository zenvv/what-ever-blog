<script lang="ts">
	import * as config from '$lib/config';

	import { supabase } from '$lib/supabase/supabase';
	import { Button } from 'bits-ui';
	import { Github, LogIn } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{config.title} / login</title>
</svelte:head>

<span class="p-8 divide-y flex items-center justify-center flex-col w-full relative">
	<form
		action="?/login"
		method="POST"
		class="flex flex-col justify-start items-start gap-4 w-[500px] px-8 py-2"
	>
		<h1 class="mb-2 text-3xl font-bold text-theme-600">LOGIN_</h1>

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

	<span class="flex items-center justify-center w-full text-sm py-8 mt-8">
		<p>
			don't have an account yet? <Button.Root class="link" href="/register"
				>register now!</Button.Root
			>
		</p>
	</span>
</span>
