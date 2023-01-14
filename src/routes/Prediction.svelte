<script lang="ts">
	import { num, phrase, dataLoaded, horoscope } from '../lib/stores';

	let ctrlDown: boolean,
		enterDown: boolean = false;
	// $: if ($num.length > 0 && $phrase.length > 0 && $horoscope.length > 0) {
	// 	$dataLoaded = true;
	// }
	// handle keydown events
	$: combination = ctrlDown && enterDown;
	$: if (combination) {
		handleClick();
	}

	async function handleClick() {
		getLuckyNumber();
		getPhrase();
		getHoroscope();
		Promise.all([getLuckyNumber(), getPhrase(), getHoroscope()]).then(() => {
			console.log($num, $phrase, $horoscope);
			$dataLoaded = true;
			console.log($dataLoaded);
		});
	}

	async function getLuckyNumber() {
		const resp = await fetch('/api/lucky-number');
		const data = await resp.json();
		$num = data['number'];
	}

	async function getPhrase() {
		const resp = await fetch(`/api/lucky-phrase`);
		const data = await resp.json();
		$phrase = data['phrase'];
	}

	async function getHoroscope() {
		const resp = await fetch(`/api/lucky-horoscope?name=Tobias`);
		const data = await resp.json();
		$horoscope = data['horoscope'];
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
