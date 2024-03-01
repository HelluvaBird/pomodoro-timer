<script lang="ts">
	import { onMount } from 'svelte';

	$: timer = '00:00';
	let isPaused = true;

	function toggle() {
		isPaused = !isPaused;
	}

	onMount(() => {
		let time = 1500;
		const timerId = setInterval(() => {
			if (isPaused) {
				return;
			}
			time--;
			const minutes = Math.floor(time / 60);
			const seconds = time % 60;

			timer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
			if (time <= 0) {
				clearInterval(timerId);
			}
		}, 1000);

		return () => clearInterval(timerId);
	});
</script>

<div
	class="mx-auto bg-slate-800 shadow-lg shadow-white/50 size-96 rounded-full grid relative place-items-center"
>
	<p class="text-8xl absolute mb-8 tracking-wider pointer-events-none">
		{timer}
	</p>
	<button class="relative text-4xl tracking-[0.3em] w-full h-full rounded-full" on:click={toggle}>
		<span class="block pt-40">{isPaused ? 'Start' : 'Pause'}</span>
	</button>
</div>
