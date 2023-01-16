<script lang="ts">
	export let isLuckyNumber: boolean = false;
	import { numAppearances, previousResults } from '$lib/stores';
</script>

<div class="terminal-card">
	<header>manekiNeko:>></header>
	<div>
		{#if isLuckyNumber}
			Your lucky number this year is: <br /> <br />
			<section class="prize-number">🍊<slot />🍊</section>
			<br /> <br />
			This has opened <emphasis><b>{$numAppearances} times</b></emphasis> since May 1986!
			<br />
			<ul>
				{#each $previousResults as prize}
					<li><b>{prize.PrizeCode}</b> - {prize.Date}</li>
				{/each}
			</ul>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	header {
		text-align: left;
		padding-left: 2rem;
	}

	section.prize-number {
		font-size: 1.5em;
		font-weight: bold;
	}

	div.terminal-card {
		display: flex;
		flex-flow: column wrap;
	}
</style>
