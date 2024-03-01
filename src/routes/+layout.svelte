<script lang="ts">
	import { page } from '$app/stores';
	import '../app.pcss';
</script>

<slot />
{#if $page.state.showModal}
	<div>Hello there</div>
{/if}

<style lang="postcss">
	:global(body) {
		@apply bg-slate-600 text-slate-50;
	}
</style>
