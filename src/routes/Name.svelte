<script lang="ts">
	import { fade } from 'svelte/transition';

	let name = '';

	$: visible = name.length > 0;
	$: displayedName = capitalise(name);

	function capitalise(name: string) {
		const s = name.split('');
		for (let i = 0; i < s.length; i++) {
			if (i == 0) {
				s[i] = s[i].toUpperCase();
			} else {
				s[i] = s[i].toLowerCase();
			}
		}
		return s.join('');
	}
</script>

<div class="name">
	{#if visible}
		<h1 transition:fade>Hello {displayedName}</h1>
	{/if}
	<input bind:value={name} />
</div>

<style>
	div.name input {
		text-align: center;
        font-family: 'Fira Mono', monospace
	}
</style>
