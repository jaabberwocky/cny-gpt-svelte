<script lang="ts">
	import { displayedName } from '../lib/stores';
	import LuckyNumber from './LuckyNumber.svelte';
	import LuckyPhrase from './LuckyPhrase.svelte';
	import LuckyHoroscope from './LuckyHoroscope.svelte';

	let num: string = '';
	let phrase: string = '';
	let horoscope: string = '';
	let ctrlDown: boolean,
		enterDown: boolean = false;
	$: visible = num.length > 0 || phrase.length > 0 || horoscope.length > 0;
	$: combination = ctrlDown && enterDown;
	$: if (combination) {
		handleClick();
	}

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

	function onKeyDown(event: any) {
		switch (event.key) {
			case 'Control':
				ctrlDown = true;
				event.preventDefault();
				break;
			case 'Enter':
				enterDown = true;
				event.preventDefault();
				break;
		}
	}

	function onKeyUp(event: any) {
		switch (event.key) {
			case 'Control':
				ctrlDown = false;
				event.preventDefault();
				break;
			case 'Enter':
				enterDown = false;
				event.preventDefault();
				break;
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp} />
<div class="lucky-predictions">
	<br />
	<button class="btn btn-default" on:click={handleClick}> CTRL+ENTER </button>
	{#if visible}
		<LuckyNumber {num} />
		<LuckyPhrase {phrase} />
		<LuckyHoroscope {horoscope} />
	{/if}
</div>

<style>
	.lucky-predictions {
		display: flex;
		flex-flow: column wrap;
		font-family: Arial, Helvetica, sans-serif;
		align-items: center;
		justify-content: center;
	}

	button {
		text-align: center;
		max-width: 200px;
	}
</style>
