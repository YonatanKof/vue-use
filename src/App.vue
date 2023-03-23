<script setup>
import useTitle from "./components/useTitle.vue";
import useClipboard from "./components/useClipboard.vue";
import useDarkColorMode from "./components/useDarkColorMode.vue";
</script>

<template>
	<useTitle />
	<hr />
	<useClipboard />
	<hr />
	<useDarkColorMode />
</template>

<style>
hr {
	margin-block: 1rem;
}
label {
	display: block;
	text-align: left;
}
</style>
