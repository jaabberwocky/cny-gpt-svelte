<script>
	import Name from './Name.svelte';
	import Prediction from './Prediction.svelte';
	import Terminal from './Terminal.svelte';
	import luckyCat from '$lib/images/lucky-cat.jpg';
</script>

<svelte:head>
	<title>CNY GPT</title>
	<meta name="description" content="Chinese New Year GPT" />
</svelte:head>

<section class="title">
	<h1>&lt;lucky-cat gpt/&gt;</h1>
</section>

<section>
	<img src={luckyCat} alt="lucky cat" width="300px" />
	<br />
	<Terminal />
	<Prediction />
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
		flex: 0.6;
	}
</style>
