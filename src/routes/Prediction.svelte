<script lang="ts">
	import { fade } from 'svelte/transition';
	import LuckyNumber from './LuckyNumber.svelte';

	let num: string = '';

	async function handleClick() {
		const resp = await fetch('http://localhost:8081/api/v1/lucky-number');
		const data = await resp.json();
		num = data['number'];
	}
</script>

<div class="lucky-number">
	<button on:click={handleClick}>Get Prediction</button>
	<LuckyNumber {num} />
</div>
