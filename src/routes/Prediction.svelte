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
	<button class="button-pushable" on:click={handleClick}>
		<span class="button-shadow" />
		<span class="button-edge" />
		<span class="button-front text"> 💰 Get Prediction 💰 </span>
	</button>
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
	.button-pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
		transition: filter 250ms;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	.button-edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: linear-gradient(
			to left,
			hsl(340deg 100% 16%) 0%,
			hsl(340deg 100% 32%) 8%,
			hsl(340deg 100% 32%) 92%,
			hsl(340deg 100% 16%) 100%
		);
	}

	.button-front {
		display: block;
		position: relative;
		padding: 12px 27px;
		border-radius: 12px;
		font-size: 1.1rem;
		color: white;
		background: hsl(345deg 100% 47%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	@media (min-width: 768px) {
		.button-front {
			font-size: 1.25rem;
			padding: 12px 42px;
		}
	}

	.button-pushable:hover {
		filter: brightness(110%);
		-webkit-filter: brightness(110%);
	}

	.button-pushable:hover .button-front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	.button-pushable:active .button-front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}

	.button-pushable:hover .button-shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	.button-pushable:active .button-shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}

	.button-pushable:focus:not(:focus-visible) {
		outline: none;
	}
</style>
