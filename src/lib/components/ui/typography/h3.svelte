<script lang="ts">
	export let className = '';
</script>

<h3 {...$$restProps} class={`scroll-m-20 text-xl font-semibold tracking-normal ${className}`}>
	<slot />
</h3>
