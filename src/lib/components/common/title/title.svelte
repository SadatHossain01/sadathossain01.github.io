<script lang="ts">
	import BaseData from '$lib/data/base';

	export let title = 'Title';
	export let description = 'Description';
</script>

<svelte:head>
	<title>{`${title} | ${BaseData.suffix}`}</title>
	<meta name="description" content={description} />
</svelte:head>
