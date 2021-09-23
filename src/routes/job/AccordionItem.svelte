<script>
	import { getContext } from 'svelte';
	import collapse from 'svelte-collapse';
	export let key;
	const store = getContext('svelte-collapsible-accordion');
	$: params = {
		open: $store.key === key,
		duration: $store.duration,
		easing: $store.easing
	};
	function handleToggle() {
		if (params.open) {
			store.update((s) => Object.assign(s, { key: null }));
		} else {
			store.update((s) => Object.assign(s, { key }));
		}
	}
</script>

<style>
	.accordion-item-header {
		user-select: none;
		cursor: pointer;
	}
</style>

<li class="accordion-item" aria-expanded={params.open}>

	<div class="accordion-item-header flex align-middle justify-between">
		<slot name="header" />
		<span class="flex align-middle" on:click={handleToggle}>
			<slot name="button" />
		</span>

	</div>

	<div class="accordion-item-body" use:collapse={params}>
		<slot name="body" />

	</div>

	<slot />

</li>
