<script lang="ts">
	import { fade } from 'svelte/transition';
	export let horoscope: string;
	$: visible = horoscope.length > 0;
</script>

{#if visible}
	<div class="lucky-horoscope" transition:fade>
		<div class="card">
			<h3 class="card-title">Horoscope</h3>
			{horoscope}
		</div>
	</div>
{/if}

<style>
	.lucky-horoscope {
		margin: auto 0.25em;
		background-color: #F77E21;
	}
	.card {
		text-align: justify;
	}
</style>
