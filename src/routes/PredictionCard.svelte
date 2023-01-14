<script lang="ts">
	import { previousResults } from '$lib/stores';
	export let isLuckyNumber: boolean = false;

	//@ts-ignore
	const numAppearances = previousResults[0]['NumberofAppearances'];
</script>

<div class="terminal-card">
	<header>lucky-cat says:</header>
	<div>
		{#if isLuckyNumber}
			Your lucky number this year is:
			<slot />
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
</style>
