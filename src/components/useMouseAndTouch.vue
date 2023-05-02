<script setup>
import { usePageLeave, usePointer, whenever } from "@vueuse/core";

const isLeft = usePageLeave();

whenever(isLeft, () => true);

const pointer = usePointer();
// Or call it on demand  
// const { x, y, pressure, pointerType } = usePointer();

// This example to show off unwatch for a one time thingy
const unwatch = whenever(isLeft, () => {
	alert("This alert will open once you're out, but you'll bve able to see its affect under the usePageLeave title");
	unwatch();
});

</script>

<!-- prettier-ignore -->
<template>
	<h2>usePageLeave</h2>
	<h3>Is pointer cursor inside the viewport: 
		<code><strong :class="{ left: isLeft }">{{ !isLeft }}</strong></code>
	</h3>
	<h2>usePointer</h2>
	<h3>X position: <code>{{ pointer.x }}</code></h3>
	<h3>Y position: <code>{{ pointer.y }}</code></h3>
	<h3>Pressure: <code>{{ pointer.pressure }}</code></h3>
	<h3>Pointer type: <code>{{ pointer.pointerType }}</code></h3>
	<h2>All that usePointer has to offer:</h2>
	<blockquote>Try it with different controllers (<code>pen</code>, <code>stylus</code>, <code>touch</code> etc')</blockquote>
	<pre> {{ pointer }}</pre>
</template>
<!-- prettier-ignore-end -->

<style scoped>
h3 {
	font-weight: normal;
}
strong {
	color: var(--color-success);
}
.left {
	color: var(--color-caution);
}
</style>
