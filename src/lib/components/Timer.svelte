<script lang="ts">
	import { settings } from '$lib/store';
	import { onMount } from 'svelte';

	let timer = '00:00';
	let isPaused = true;
	let timerId: number;
	let time = $settings.pomodoro;

	function formatTime(time: number) {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		timer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function startTimer() {
		timerId = setInterval(() => {
			time--;
			formatTime(time);
			if (time < 0) {
				completePomodoro();
			}
		}, 1000);
	}

	function pauseTimer() {
		clearInterval(timerId);
	}

	function completePomodoro() {
		clearInterval(timerId);
		if ($settings.breaks === 4 && $settings.isBreak) {
			time = $settings.pomodoro;
			$settings.breaks %= 4;
			$settings.isBreak = false;
		} else if ($settings.isBreak) {
			time = $settings.pomodoro;
			$settings.isBreak = false;
		} else if ($settings.breaks < 3) {
			time = $settings.short;
			$settings.breaks += 1;
			$settings.isBreak = true;
		} else {
			time = $settings.long;
			$settings.breaks += 1;
			$settings.isBreak = true;
		}
		formatTime(time);
		startTimer();
	}

	function toggle() {
		if (isPaused) {
			startTimer();
		} else {
			pauseTimer();
		}
		isPaused = !isPaused;
	}

	onMount(() => {
		formatTime(time);
		() => clearInterval(timerId);
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
