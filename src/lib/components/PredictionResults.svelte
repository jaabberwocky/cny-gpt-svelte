<script lang="ts">
	import { fade } from 'svelte/transition';
	import { num, phrase, horoscope } from '../lib/stores';
	import PredictionCard from './PredictionCard.svelte';
</script>

<div id="prediction-results" in:fade out:fade={{ duration: 100 }}>
	<div class="terminal-timeline">
		<PredictionCard>{$phrase}</PredictionCard>
		<PredictionCard isLuckyNumber={true}>{$num}</PredictionCard>
		<PredictionCard>{$horoscope}</PredictionCard>
	</div>
</div>
