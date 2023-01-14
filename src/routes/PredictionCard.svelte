<script lang="ts">
	export let isLuckyNumber: boolean = false;
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
