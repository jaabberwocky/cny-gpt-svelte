<script lang="ts">
	import { displayedName } from '../lib/stores';
	import LuckyNumber from './LuckyNumber.svelte';
	import LuckyPhrase from './LuckyPhrase.svelte';
	import LuckyHoroscope from './LuckyHoroscope.svelte';

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
		const resp = await fetch(`http://localhost:8081/api/v1/lucky-phrase?name=${$displayedName}`);
		const data = await resp.json();
		phrase = data['phrase'];
	}

	async function getHoroscope() {
		const resp = await fetch(`http://localhost:8081/api/v1/lucky-horoscope?name=${$displayedName}`);
		const data = await resp.json();
		horoscope = data['horoscope'];
	}
</script>

<div class="lucky-predictions">
	<br />
	<button on:click={handleClick}>Get Prediction</button>
	<LuckyNumber {num} />
	<LuckyPhrase {phrase} />
	<LuckyHoroscope {horoscope} />
</div>

<style>
	.lucky-predictions {
		display: flex;
		flex-flow: column wrap;
		font-family: Arial, Helvetica, sans-serif;
	}

	button {
		max-width: 150px;
		/* centers the button */
		margin: 0 auto;
	}
</style>
