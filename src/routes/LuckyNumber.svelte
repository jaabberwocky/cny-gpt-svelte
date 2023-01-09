<script lang="ts">
	import { fade } from "svelte/transition";

    export let num: string;

    $: visible = num.length > 0;
</script>

<div class="lucky-number">
    {#if visible}
        <h1 transition:fade>{num}</h1>
    {/if}
</div>