<script lang="ts">
	import { fade } from 'svelte/transition';
	import { dataLoaded } from '../lib/stores';
	import PredictionResults from './PredictionResults.svelte';
	export let buttonPressed: boolean;
	export let name: string;
</script>

<br />
{#if !$dataLoaded}
	<div class="window">
		<div class="terminal">
			<p class="command">./lucky_cat.gpt</p>
			<p class="log">
				<span>
					Initialising...<br />
					const manekiNeko = new luckyCatGPT();<br />
					manekiNeko.init(); <br />
					console.log("Meooowwwww!");
				</span>
			</p>
			<p class="command">manekiNeko: tell me your name...</p>
			{#if name !== ''}
				<p in:fade={{ duration: 500 }} out:fade={{ duration: 100 }}>
					manekiNeko: Hello {name}! Hit CTRL+Enter to continue...
				</p>
			{/if}
			{#if buttonPressed}
				<p in:fade out:fade={{ duration: 100 }}>Loading...</p>
			{/if}
		</div>
	</div>
{:else}
	<PredictionResults />
{/if}

<style lang="scss">
	.window {
		border-radius: 3px;
		background: #222;
		color: #fff;
		overflow: hidden;
		position: relative;
		margin: 0 auto;
		width: 90%;

		&:before {
			content: ' ';
			display: block;
			height: 48px;
			background: #c6c6c6;
		}

		&:after {
			content: '. . .';
			position: absolute;
			left: 12px;
			right: 0;
			top: -3px;
			font-family: 'Times New Roman', Times, serif;
			font-size: 50px;
			color: #fff;
			line-height: 0;
			letter-spacing: -12px;
		}
	}

	.terminal {
		margin: 10px;
		font-family: monospace;
		font-size: 1em;
		color: #22da26;

		.command {
			width: 0%;
			white-space: nowrap;
			overflow: hidden;
			animation: write-command 2s both;

			&:before {
				content: '$ ';
				color: #22da26;
			}
		}

		.log {
			white-space: nowrap;
			overflow: hidden;
			animation: write-log 2s both;
		}

		p:nth-child(2) {
			animation-delay: 2s;
		}

		p:nth-child(3) {
			animation-delay: 4s;
		}

		p:nth-child(4) {
			animation-delay: 6s;
		}
	}

	@keyframes write-command {
		0% {
			width: 0%;
		}

		100% {
			width: 100%;
		}
	}

	@keyframes write-log {
		0% {
			height: 0;
		}

		16% {
			height: 0;
		}

		17% {
			height: 18px;
		}

		33% {
			height: 18px;
		}

		34% {
			height: 37px;
		}

		51% {
			height: 37px;
		}

		52% {
			height: 55px;
		}

		69% {
			height: 55px;
		}

		70% {
			height: 74px;
		}

		87% {
			height: 74px;
		}

		88% {
			height: 92px;
		}

		88% {
			height: 92px;
		}

		99% {
			height: 92px;
		}

		100% {
			height: 110px;
		}
	}
</style>
