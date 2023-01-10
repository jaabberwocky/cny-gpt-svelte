<script>
	import Name from './Name.svelte';
	import Prediction from './Prediction.svelte';

	import luckyCat from '$lib/images/lucky-cat.jpg';
</script>

<svelte:head>
	<title>CNY GPT</title>
	<meta name="description" content="Chinese New Year GPT" />
</svelte:head>

<section>
	<img src={luckyCat} alt="lucky cat" width="300px" />
	<br />
	<Name />
	<Prediction />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
