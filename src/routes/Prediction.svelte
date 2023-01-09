<script lang="ts">
	import LuckyNumber from './LuckyNumber.svelte';
	import {displayedName} from "../lib/stores";

	let num: string = '';
	let phrase: string = '';
	let horoscope: string = '';

	async function handleClick() {
		getLuckyNumber();
		getPhrase();
		getHoroscope();
	}

	async function getLuckyNumber() {
		const resp = await fetch('http://localhost:8081/api/v1/lucky-number');
		const data = await resp.json();
		num = data['number'];
	}

	async function getPhrase() {
		const resp = await fetch(`http://localhost:8081/api/v1/lucky-phrase?name=${$displayedName}`)
		const data = await resp.json()
		phrase = data['phrase']
	}

	async function getHoroscope() {
		const resp = await fetch(`http://localhost:8081/api/v1/lucky-horoscope?name=${$displayedName}`)
		const data = await resp.json()
		horoscope = data['phrase']
	}
</script>

<div class="lucky-number">
	<br>
	<button on:click={handleClick}>Get Prediction</button>
	<LuckyNumber {num} />
	<p>{phrase}</p>
	<p>{horoscope}</p>
</div>

<style>
	.lucky-number {
		display: flex;
		flex-flow: column wrap;
	}

	p {
		text-align:center;
	}

	button {
		max-width: 150px;
		/* centers the button */
		margin: 0 auto; 
	}
</style>
