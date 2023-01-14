<script lang="ts">
	import Prediction from './Prediction.svelte';
	import Terminal from './Terminal.svelte';
	import luckyCat from '$lib/images/lucky-cat.jpg';

	import { dataLoaded } from '$lib/stores';
	import Restart from './Restart.svelte';

	let buttonPressed: boolean = false;
	let name: string = '';
	let visible: boolean = false;

	function handleMessage(event: any) {
		console.log(event.detail.text);
	}

	setTimeout(() => (visible = true), 10000);
</script>

<svelte:head>
	<title>&lt;lucky-cat gpt/&gt;</title>
	<meta name="description" content="Chinese New Year GPT" />
</svelte:head>

<section class="title">
	<h1>&lt;lucky-cat gpt/&gt;</h1>
</section>

<section class="main">
	<img src={luckyCat} alt="lucky cat" />
	<br />
	<Terminal bind:name bind:buttonPressed on:message={handleMessage} />
	{#if visible}
		{#if !($dataLoaded && buttonPressed)}
			<Prediction bind:buttonPressed bind:name />
		{:else}
			<Restart />
		{/if}
	{/if}
</section>

<style>
	section.title h1 {
		font-family: 'Courier New', Courier, monospace;
		color: #d61c4e;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0;
	}

	section.main img {
		width: 100%;
		max-width: 225px;
	}
</style>
