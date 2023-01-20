<script lang="ts">
	import Prediction from '$lib/components/Prediction.svelte';
	import Terminal from '$lib/components/Terminal.svelte';
	import luckyCat from '$lib/images/lucky-cat.png';

	import { dataLoaded } from '$lib/stores';
	import Restart from '$lib/components/Restart.svelte';

	let buttonPressed: boolean = false;
	let name: string = '';
	let animationEnd: boolean = false;
</script>

<svelte:head>
	<title>&lt;lucky-cat gpt/&gt;</title>
	<meta name="description" content="<lucky-cat gpt/>" />
</svelte:head>

<section class="title">
	<h1>&lt;lucky-cat gpt/&gt;</h1>
</section>

<section class="main">
	<img src={luckyCat} alt="lucky cat" />
	<br />
	<br />
	<br />
	<Terminal bind:name bind:buttonPressed bind:animationEnd />
	{#if animationEnd}
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
		max-width: 400px;
		margin-bottom: 10px;
	}
</style>
