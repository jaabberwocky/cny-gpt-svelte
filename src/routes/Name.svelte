<script lang="ts">
	export let name: string;

	function init(el: any) {
		el.focus();
	}
</script>

<div class="form-group">
	<br />
	<label for="name">Input name:</label>
	<input bind:value={name} use:init />
</div>

<style>
	label,
	input {
		font-family: 'Courier';
	}
</style>
