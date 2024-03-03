<script lang="ts">
	import * as config from '$lib/config';
	import { Button } from 'bits-ui';

	import { Github, KeyRound } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{config.title} / register</title>
</svelte:head>

<div class="p-8 size-full divide-y flex flex-col items-center justify-center">
	<form action="?/register" method="POST" class="flex flex-col gap-4 w-[500px] py-2 px-8">
		<h1 class="mb-3 text-theme-500 text-3xl font-bold">REGISTER_</h1>

		<label for="email" class="leading-none m-0 p-0 mt-4">e-mail</label>
		<input type="email" name="email" placeholder="mike.smith@email.com" />

		<label for="pass" class="leading-none m-0 p-0 mt-4">password</label>
		<input type="password" name="password" placeholder="********" />

		<Button.Root type="submit" class="self-end mt-2 w-1/3"
			><KeyRound size="16" /> register</Button.Root
		>
	</form>

	<span class="flex items-center justify-center w-full mt-8 py-8 text-sm">
		<p>
			already have an account? <Button.Root class="link" href="/login">login</Button.Root>
		</p>
	</span>
</div>
