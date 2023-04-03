<script setup>
import { ref } from "vue";
import { onKeyStroke, useMagicKeys, whenever } from "@vueuse/core";

const keys = useMagicKeys();
const controls = {
	ArrowDown: () => (position.value.y += 1),
	ArrowUp: () => (position.value.y -= 1),
	ArrowRight: () => (position.value.x += 1),
	ArrowLeft: () => (position.value.x -= 1),
};

onKeyStroke(Object.keys(controls), (e) => {
	e.preventDefault();
	controls[e.key]();
});

/**
 * * Add shift modifier 
 */
whenever(keys.shift_ArrowDown, () => {
	position.value.y += 10;
});
whenever(keys.shift_ArrowUp, () => {
	position.value.y -= 10;
});
whenever(keys.shift_ArrowRight, () => {
	position.value.x += 10;
});
whenever(keys.shift_ArrowLeft, () => {
	position.value.x -= 10;
});

/**
 * * Add shift+control modifier 
 */
whenever(keys.shift_control_ArrowDown, () => {
	position.value.y += 100;
});
whenever(keys.shift_control_ArrowUp, () => {
	position.value.y -= 100;
});
whenever(keys.shift_control_ArrowRight, () => {
	position.value.x += 100;
});
whenever(keys.shift_control_ArrowLeft, () => {
	position.value.x -= 100;
});

const position = ref({ x: 0, y: 0 });
</script>

<template>
	<div class="ball"></div>
</template>

<style>
.ball {
	width: 1rem;
	height: 1rem;
	background: red;
	border-radius: 50%;
	position: relative;
	top: v-bind(position.y + "px");
	left: v-bind(position.x + "px");
}
</style>

<!-- onKeyStroke(["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", shiftArrowDown], (e) => {
	e.preventDefault();
	if (e.key === "ArrowDown") {
		position.value.y += 1;
	}
	if (e.key === "ArrowUp") {
		position.value.y -= 1;
	}
	if (e.key === "ArrowRight") {
		position.value.x += 1;
	}
	if (e.key === "ArrowLeft") {
		position.value.x -= 1;
	}
}); -->
