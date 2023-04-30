<script setup>
import { usePageLeave, whenever } from "@vueuse/core";
const isLeft = usePageLeave();

whenever(isLeft, () => true);

/**
 * * Or use this example to show off unwatch for a one time thingy 
 * const unwatch = whenever(isLeft, () => {
 *	alert("yess!");
 *	unwatch();
 * });
 */
</script>

<template>
	<h2>
		Is pointer cursor inside the viewport: <strong  :class="{ left: isLeft }">{{ !isLeft }}</strong>
	</h2>
</template>

<style scoped>
h2 {
	font-weight: normal;
}
strong {
	color: darkgreen;
}
.left {
	color: firebrick;
}
</style>
