<script lang="ts">
	import { page } from '$app/stores';
	import SettingsModal from '$lib/components/SettingsModal.svelte';
	import '../app.pcss';
</script>

<slot />
{#if $page.state.showModal}
	<SettingsModal />
{/if}

<style lang="postcss">
	:global(body) {
		@apply bg-slate-600 text-slate-50;
	}
</style>
