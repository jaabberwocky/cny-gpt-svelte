<script lang="ts">
	import { fade } from 'svelte/transition';

	export let phrase: string;

	$: visible = phrase.length > 0;
</script>

{#if visible}
	<div class="lucky-phrase" transition:fade>
		<div class="card">
			🍊🧧 <br />{phrase}<br /> 🧧🍊
		</div>
	</div>
{/if}

<style>
	.lucky-phrase {
		margin: auto 0.25em;
		min-width: 50%;
	}
	.card {
		text-align: center;
		font-size: 1.5em;
	}
</style>
