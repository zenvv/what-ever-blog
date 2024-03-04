<script lang="ts">
	import { Button, Tooltip } from 'bits-ui';
	import { InfoIcon } from 'lucide-svelte';
	import { flyAndScale } from '$lib/utils';
	import { quadInOut, quintInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div class="w-full flex flex-col items-start justify-start divide-y mt-10">
	<form
		action="?/new"
		method="POST"
		class="flex flex-col items-start justify-start gap-3 min-w-full p-4 h-full"
	>
		<h1 class="mb-3 text-3xl text-theme-500 font-semibold">create a new article \^o^/</h1>

		<label for="title" class="leading-none m-0 p-0 mt-4">title</label>
		<input
			type="text"
			name="title"
			id="title"
			class="text-base"
			placeholder="the quick brown fox jumps over the lazy dog"
		/>

		<span class="flex items-center justify-start gap-2 mt-4 p-0 m-0">
			<label for="desc" class="leading-none m-0 p-0">description</label>
			<Tooltip.Root openDelay={50} closeDelay={300}>
				<Tooltip.Trigger class="m-0"><InfoIcon size="14" /></Tooltip.Trigger>
				<Tooltip.Content
					transitionConfig={{ x: -20, y: 0, duration: 100 }}
					side="left"
					sideOffset={12}
					fitViewport
					align="end"
					transition={flyAndScale}
				>
					<Tooltip.Arrow />
					<p>
						a quick description about your post. <br /> this will be displayed in the homepage =)
					</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</span>
		<textarea
			name="desc"
			id="desc"
			class="h-20 resize-none"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis doloremque, quasi rerum illum dolor eveniet quod praesentium, nam accusantium alias at provident iusto excepturi saepe consequatur vero..."
		/>

		<Button.Root class="text-lg self-end mt-8">create post</Button.Root>
	</form>
</div>
