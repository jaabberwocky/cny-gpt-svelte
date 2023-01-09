<script>
	import Name from './Name.svelte';
	import LuckyNumber from './LuckyNumber.svelte';
</script>

<svelte:head>
	<title>CNY GPT</title>
	<meta name="description" content="Chinese New Year GPT" />
</svelte:head>

<section>
	<Name />
	<LuckyNumber />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
