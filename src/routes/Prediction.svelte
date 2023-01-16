<script lang="ts">
	import {
		num,
		phrase,
		dataLoaded,
		horoscope,
		previousResults,
		numAppearances
	} from '../lib/stores';
	import { fade } from 'svelte/transition';
	import Name from './Name.svelte';
	import { BarLoader } from 'svelte-loading-spinners';

	let ctrlDown: boolean,
		enterDown: boolean = false;

	export let buttonPressed: boolean = false;
	export let name: string;

	// handle keydown events
	$: combination = ctrlDown && enterDown;
	$: if (combination) {
		handleClick();
	}

	async function handleClick() {
		buttonPressed = true;
		getLuckyNumber().then(() => {
			getPreviousResults($num);
		});
		getPhrase();
		getHoroscope();
		Promise.all([getLuckyNumber(), getPhrase(), getHoroscope()]).then(() => {
			$dataLoaded = true;
		});
	}

	async function getLuckyNumber() {
		const resp = await fetch('/api/lucky-number');
		const data = await resp.json();
		$num = data['number'];
	}

	async function getPreviousResults(numToCheck: string) {
		const resp = await fetch('/api/previous-result?number=' + numToCheck);
		const data = await resp.json();
		const results = JSON.parse(data['d']);
		console.log(results);

		$numAppearances = results[0]['NumberOfAppearances'];
		$previousResults = getPreviousWinningDates(results[0]['Prizes']);

		console.log($previousResults);
	}

	function getPreviousWinningDates(
		prizesArr: Array<{ DrawDate: string; PrizeCode: string }>
	): Array<{ PrizeCode: string; Date: string }> {
		const arr: Array<{ PrizeCode: string; Date: string }> = [];

		prizesArr.forEach((prize: { DrawDate: string; PrizeCode: string }) => {
			const d = prize['DrawDate'];
			const secondsSinceEpoch = extractOnlyNumbersFromString(d);
			const dateObj = new Date(parseInt(secondsSinceEpoch));

			const prizeMapping: { [index: string]: string } = {
				S: 'Starter',
				C: 'Consolation',
				'3': 'Third',
				'2': 'Second',
				'1': 'First'
			};

			const obj = {
				Date: dateObj.toLocaleDateString('en-SG', {
					timeZone: 'Asia/Singapore',
					hour12: false,
					weekday: 'short',
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				}),
				PrizeCode: prizeMapping[prize['PrizeCode']]
			};

			arr.push(obj);
		});
		return arr;
	}

	function extractOnlyNumbersFromString(s: string): string {
		return s.replace(/\D/g, '');
	}

	async function getPhrase() {
		const resp = await fetch(`/api/lucky-phrase?name=${name}`);
		const data = await resp.json();
		$phrase = data['phrase'];
	}

	async function getHoroscope() {
		const resp = await fetch(`/api/lucky-horoscope?name=${name}`);
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
<div class="lucky-predictions" in:fade={{ duration: 100 }}>
	<br />
	{#if buttonPressed}
		<div class="loader">
			<BarLoader size="60" color="#d61c4e" unit="px" />
		</div>
	{:else}
		<Name bind:name />
	{/if}
	{#if name.length > 0 && !buttonPressed}
		<button class="btn btn-default" on:click={handleClick} in:fade={{ duration: 100 }}>
			CTRL+ENTER
		</button>
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

	.loader {
		margin-top: 1.2rem;
	}
</style>
