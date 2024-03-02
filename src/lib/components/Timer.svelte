<script lang="ts">
	import { settings } from '$lib/store';
	import { getProgressColor } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let timer = '00:00';
	let isPaused = true;
	let timerId: number;
	let time = $settings.pomodoro;
	let percentage = '0';

	function formatTime(time: number) {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		timer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function formatPercentage(time: number) {
		let total;
		if (!$settings.isBreak) {
			total = $settings.pomodoro;
		} else if ($settings.isBreak && $settings.breaks < 4) {
			total = $settings.short;
		} else {
			total = $settings.long;
		}

		percentage = (Math.ceil((time / total) * 10) * 10).toString();
	}

	function startTimer() {
		timerId = setInterval(() => {
			time--;
			formatTime(time);
			formatPercentage(time);
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
		formatPercentage(time);
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
		formatPercentage(time);
		() => clearInterval(timerId);
	});

	$: background = `radial-gradient(closest-side, rgb(30 41 59) 79%, transparent 80% 90%, rgb(30 41 59) 91% 100% ), conic-gradient(${getProgressColor($settings.color)} ${percentage}%, rgb(30 41 59) 0)`;
</script>

<div
	class="mx-auto bg-slate-800 shadow-lg shadow-white/50 size-96 rounded-full grid relative place-items-center"
>
	<button
		class="relative text-4xl tracking-[0.3em] w-full h-full rounded-full"
		style:background
		on:click={toggle}
	>
		<span class="block pt-40">{isPaused ? 'Start' : 'Pause'}</span>
	</button>
	<p class="text-8xl absolute mb-8 tracking-wider pointer-events-none">
		{timer}
	</p>
</div>
