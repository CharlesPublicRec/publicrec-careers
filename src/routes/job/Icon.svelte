<script>
	export let isOpen;
	function toggle() {
		isOpen = !isOpen;
	}
</script>

<style>
	.icon {
		height: 18px;
		width: 18px;
	}
	button {
		background: none;
		border: none;
		outline: none;
	}
	.vertical {
		transform-origin: 50% 50%;
		transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1) 0s;
	}

	[aria-expanded='true'] .vertical {
		transform: rotate(90deg);
		transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1) 0s;
	}
</style>

<button id="plusMinus" aria-expanded={isOpen} on:click={toggle}>
	<svg
		aria-hidden="true"
		class="icon icon--type-cog"
		width="2"
		height="2"
		role="img"
		version="1.1"
		viewBox="0 0 16 16">
		<rect class="horizontal" y="7" width="16" height="2" />
		<rect class="vertical" x="7" width="2" height="16" />
	</svg>
</button>
