<script setup lang="ts">
import { usePointer } from "@vueuse/core";
import { ref, reactive, onMounted, watch } from "vue";

// Oddly enough, the pointer returned be usePointer isn't a proper reactive variable
// so in order to be able to watch it for changes we need to call reactive when we define it
const pointer = reactive(usePointer());
// We can access the ref element in the script section by making a reactive ref of the same name
const canvas = ref(null);
// Watch the pointer for changes
watch(pointer, () => {
	// This condition makes it so that we have to click and hold when we want to draw
	if (pointer.pressure === 0) return;
	// Next, we'll get the canvas context with the HTMLCanvasElement: getContext() method in order to be able to draw on it
	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
	const ctx = canvas.value.getContext("2d");
	ctx.fillStyle = "firebrick";
	// ctx.ellipse(pointer.x + 200, pointer.y + 200, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
	ctx.fillRect(pointer.x - 200, pointer.y -200, 10, 10);
});
onMounted(() => {
	canvas.value.style.height = "var(--width-md)";
	canvas.value.style.width = "100%";
	canvas.value.style.backgroundColor = "beige";
	canvas.value.style.border = "solid brown 2px";
});
</script>

<template>
	<canvas ref="canvas"></canvas>
</template>