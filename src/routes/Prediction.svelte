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
	<button class="button-3" on:click={handleClick}>💰 Get Prediction 💰</button>
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
		max-width: 250px;
		/* centers the button */
		margin: 0 auto;
	}

	/* CSS */
	.button-3 {
		appearance: none;
		background-color: #2ea44f;
		border: 1px solid rgba(27, 31, 35, 0.15);
		border-radius: 6px;
		box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji';
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
		padding: 6px 16px;
		position: relative;
		text-align: center;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		vertical-align: middle;
		white-space: nowrap;
	}

	.button-3:focus:not(:focus-visible):not(.focus-visible) {
		box-shadow: none;
		outline: none;
	}

	.button-3:hover {
		background-color: #2c974b;
	}

	.button-3:focus {
		box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
		outline: none;
	}

	.button-3:disabled {
		background-color: #94d3a2;
		border-color: rgba(27, 31, 35, 0.1);
		color: rgba(255, 255, 255, 0.8);
		cursor: default;
	}

	.button-3:active {
		background-color: #298e46;
		box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
	}
</style>
