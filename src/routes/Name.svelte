<script lang="ts">
	export let name: string;
</script>

<div class="form-group">
	<label for="name">Input name:</label>
	<input bind:value={name} />
</div>
