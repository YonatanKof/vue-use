<script setup>
import useTitle from "./components/useTitle.vue";
import useClipboard from "./components/useClipboard.vue";
import useDarkColorMode from "./components/useDarkColorMode.vue";
import onKeyStroke from "./components/onKeyStroke.vue";
</script>

<template>
	<useTitle />
	<hr />
	<useClipboard />
	<hr />
	<useDarkColorMode />
	<hr />
	<onKeyStroke />
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
