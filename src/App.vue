<script setup>
import useTitle from "./components/useTitle.vue";
import useClipboard from "./components/useClipboard.vue";
import useDarkColorMode from "./components/useDarkColorMode.vue";
import onKeyStroke from "./components/onKeyStroke.vue";
import useDeviceSensors from "./components/useDeviceSensors.vue";
</script>

<template>
	<router-view />
	<useTitle />
	<hr />
	<useClipboard />
	<hr />
	<useDarkColorMode />
	<hr />
	<useDeviceSensors />
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
