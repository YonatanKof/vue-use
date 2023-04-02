<script setup>

import { ref, watch } from "vue";
import { onKeyStroke, useMagicKeys, whenever } from "@vueuse/core";

const keys = useMagicKeys();
const controls = {
	ArrowDown: () => (position.value.y += 5),
	ArrowUp: () => (position.value.y -= 5),
	ArrowRight: () => (position.value.x += 5),
	ArrowLeft: () => (position.value.x -= 5),
};

onKeyStroke(Object.keys(controls), (e) => {
	e.preventDefault();
	controls[e.key]();
});

whenever(keys.shift_ArrowDown, () => {
	position.value.y += 50;
});
whenever(keys.shift_ArrowUp, () => {
	position.value.y -= 50;
});
whenever(keys.shift_ArrowRight, () => {
	position.value.x += 50;
});
whenever(keys.shift_ArrowLeft, () => {
	position.value.x -= 50;
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
		position.value.y += 5;
	}
	if (e.key === "ArrowUp") {
		position.value.y -= 5;
	}
	if (e.key === "ArrowRight") {
		position.value.x += 5;
	}
	if (e.key === "ArrowLeft") {
		position.value.x -= 5;
	}
}); -->
