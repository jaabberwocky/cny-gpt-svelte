<script lang="ts">
	import LuckyNumber from './LuckyNumber.svelte';
	import {displayedName} from "../lib/stores";

	let num: string = '';

	async function handleClick() {


	}

	async function getLuckyNumber() {
		const numResp = await fetch('http://localhost:8081/api/v1/lucky-number');
		const numData = await numResp.json();
		num = numData['number'];
	}

	async function getHoroscope() {

	}
</script>

<div class="lucky-number">
	<h1>store: {$displayedName}</h1>
	<button on:click={handleClick}>Get Prediction</button>
	<LuckyNumber {num} />
</div>
