<script lang="ts">
	export let className = '';
</script>

<h1
	{...$$restProps}
	class={`scroll-m-20 text-3xl font-bold tracking-wider lg:text-4xl ${className}`}
>
	<slot />
</h1>
