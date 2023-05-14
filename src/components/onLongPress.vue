<script setup>
import { ref } from 'vue';
import { onLongPress } from '@vueuse/core';
const longBtn = ref(null);
onLongPress(
	longBtn,
	() => {
		alert('Sooooo long');
	},
	{ delay: 700 }
);
</script>

<template>
    <h3>Press and hold button to click</h3>
	<button ref="longBtn">Press long</button>
</template>
