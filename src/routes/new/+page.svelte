<script lang="ts">
	import { Button, Pagination, Tooltip } from 'bits-ui';
	import { ChevronsLeft, ChevronsRight, InfoIcon } from 'lucide-svelte';
	import { flyAndScale } from '$lib/utils';
	import { quadInOut, quintInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { count } from 'console';
</script>

<div class="w-full flex flex-col items-start justify-start divide-y mt-3">
	<form
		action="?/new"
		method="POST"
		class="flex flex-col items-start justify-start gap-3 min-w-full p-4 h-full"
	>
		<h1
			class="mb-3 text-3xl text-theme-500 font-semibold underline decoration-wavy underline-offset-8"
		>
			create a new article \^o^/
		</h1>

		<div class="size-full space-y-3 mt-2">
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
						side="right"
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
				class="h-40 resize-none"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis doloremque, quasi rerum illum dolor eveniet quod praesentium, nam accusantium alias at provident iusto excepturi saepe consequatur vero..."
			/>
		</div>

		<div class="size-full">
			<span class="flex items-center justify-start gap-2 mt-4 p-0 m-0">
				<label for="content" class="leading-none m-0 p-0">article content</label>
				<Tooltip.Root openDelay={50} closeDelay={300}>
					<Tooltip.Trigger class="m-0"><InfoIcon size="14" /></Tooltip.Trigger>
					<Tooltip.Content
						transitionConfig={{ x: -20, y: 0, duration: 100 }}
						side="right"
						sideOffset={12}
						fitViewport
						align="end"
						transition={flyAndScale}
					>
						<Tooltip.Arrow />
						<p>for writing an article, you need to use markdown.</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</span>
			<textarea name="content" id="content" class="h-[600px] resize-none" />
		</div>

		<span class="mt-8 border-t flex items-center justify-end gap-2 w-full">
			<Button.Root type="button" class="outlined text-lg">preview article</Button.Root>
			<Button.Root class="text-lg self-end">create post</Button.Root>
		</span>
	</form>
</div>
