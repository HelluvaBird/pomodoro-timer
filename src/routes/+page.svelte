<script lang="ts">
	import Settings from '$lib/components/Settings.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import TimerTabs from '$lib/components/TimerTabs.svelte';
</script>

<main class="min-h-screen grid place-content-center gap-y-20">
	<h1 class="text-4xl mx-auto">Pomodoro Timer</h1>
	<TimerTabs />
	<Timer />
	<Settings />
</main>
