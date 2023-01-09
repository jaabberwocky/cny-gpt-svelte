<script lang="ts">
	import { fade } from 'svelte/transition';

	let number: string = '';
	$: visible = number.length > 0;

	async function handleClick() {
		const resp = await fetch('http://localhost:8081/api/v1/lucky-number');
		const data = await resp.json();
		number = data['number'];
	}
</script>

<div class="lucky-number">
	<button on:click={handleClick}>Get Number</button>
	{#if visible}
		<h1 id="number" transition:fade>{number}</h1>
	{/if}
</div>

<style>
	#number {
		text-align: center;
	}
</style>
