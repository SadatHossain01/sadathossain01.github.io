<script lang="ts">
	export let className = '';
</script>

<h2
	{...$$restProps}
	class={`scroll-m-20 pb-2 text-2xl font-semibold tracking-normal first:mt-0 ${className}`}
>
	<slot />
</h2>
