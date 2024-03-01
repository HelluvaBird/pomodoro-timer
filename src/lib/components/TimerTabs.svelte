<script lang="ts">
	import { settings } from '$lib/store';
</script>

<div class="grid grid-cols-3 gap-2 border-2 rounded-full p-2 text-slate-300 font-semibold">
	<p class="py-3 px-6 bg-transparent rounded-full" class:active={!$settings.isBreak}>pomodoro</p>
	<p
		class="py-3 px-6 bg-transparent rounded-full"
		class:active={$settings.isBreak && $settings.breaks < 4}
	>
		short break
	</p>
	<p
		class="py-3 px-6 bg-transparent rounded-full"
		class:active={$settings.isBreak && $settings.breaks === 4}
	>
		long break
	</p>
</div>

<style lang="postcss">
	.active {
		@apply bg-pink-400 text-slate-700;
	}
</style>
