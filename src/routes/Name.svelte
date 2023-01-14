<script lang="ts">
	export let name: string;
</script>

<div class="form-group">
	<br />
	<label for="name">Input name:</label>
	<input bind:value={name} />
</div>

<style>
	label,
	input {
		font-family: 'Courier';
	}
</style>
