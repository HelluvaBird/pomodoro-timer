<script lang="ts">
	import { settings } from '$lib/store';
	import { getBackgroundColor } from '$lib/utils/utils';

	function setColor(color: string) {
		$settings.color = color;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	role="dialog"
	class="absolute inset-0 bg-black/70 grid place-items-center"
	on:click|self={() => history.back()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="bg-white max-w-lg w-full rounded-lg text-slate-900 relative" on:click|stopPropagation>
		<div class="p-6 flex items-center justify-between border-b">
			<h2 class="text-3xl font-semibold">Settings</h2>
			<button on:click={() => history.back()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
		<div class="p-6">
			<div class="border-b">
				<p class="text-xl">Time (Minutes)</p>
				<div class="grid grid-cols-3 gap-8 my-6">
					<div>
						<label for="pomodoro" class="block">pomodoro</label>
						<input
							type="number"
							name="pomodoro"
							id="pomodoro"
							bind:value={$settings.pomodoro}
							class="bg-slate-200 p-2 rounded-lg mt-2 w-full"
						/>
					</div>
					<div>
						<label for="shortBreak" class="block">short break</label>
						<input
							type="number"
							name="shortBreak"
							id="shortBreak"
							bind:value={$settings.short}
							class="bg-slate-200 p-2 rounded-lg mt-2 w-full"
						/>
					</div>
					<div>
						<label for="longBreak" class="block">long break</label>
						<input
							type="number"
							name="longBreak"
							id="longBreak"
							bind:value={$settings.long}
							class="bg-slate-200 p-2 rounded-lg mt-2 w-full"
						/>
					</div>
				</div>
			</div>
			<div class="flex justify-between items-center my-6">
				<p class="text-xl">Color</p>
				<div class="flex justify-between items-center gap-4">
					<button
						class="size-10 bg-pink-400 rounded-full grid place-content-center"
						on:click={() => setColor('pink')}
					>
						{#if $settings.color === 'pink'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
							</svg>
						{/if}
					</button>
					<button
						class="size-10 bg-sky-400 rounded-full grid place-content-center"
						on:click={() => setColor('blue')}
					>
						{#if $settings.color === 'blue'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
							</svg>
						{/if}
					</button>
					<button
						class="size-10 bg-orange-400 rounded-full grid place-content-center"
						on:click={() => setColor('orange')}
					>
						{#if $settings.color === 'orange'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
		<button
			on:click={() => history.back()}
			class={`absolute py-2 px-6 uppercase ${getBackgroundColor($settings.color)} rounded-full text-white font-medium tracking-wide left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2`}
			>Apply</button
		>
	</div>
</div>
