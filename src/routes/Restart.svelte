<script lang="ts">
	import { dataLoaded } from '$lib/stores';
	export let buttonPressed: boolean;

	function handleClick() {
		$dataLoaded = false;
		buttonPressed = false;
	}
</script>

<button class="btn btn-error btn-ghost" on:click={handleClick}> RESTART </button>
