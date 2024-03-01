<script lang="ts">
	import { settings } from '$lib/store';
	import { getBackgroundColor } from '$lib/utils/utils';
</script>

<div class="grid grid-cols-3 gap-2 border-2 rounded-full p-2 text-slate-300 font-semibold">
	<p
		class={`py-3 px-6 ${$settings.isBreak ? 'bg-transparent' : `${getBackgroundColor($settings.color)} text-slate-700`} rounded-full`}
	>
		pomodoro
	</p>
	<p
		class={`py-3 px-6 rounded-full ${$settings.isBreak && $settings.breaks < 4 ? `${getBackgroundColor($settings.color)} text-slate-700` : 'bg-transparent'}`}
	>
		short break
	</p>
	<p
		class={`py-3 px-6 rounded-full ${$settings.isBreak && $settings.breaks === 4 ? `${getBackgroundColor($settings.color)} text-slate-700` : 'bg-transparent'}`}
	>
		long break
	</p>
</div>
