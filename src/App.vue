<script setup>
import useTitle from "./components/useTitle.vue";
import useClipboard from "./components/useClipboard.vue";
</script>

<template>
	<useTitle />
	<hr />
	<useClipboard />
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
