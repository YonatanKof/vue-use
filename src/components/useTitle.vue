<script setup>
import { useTitle } from "@vueuse/core";

const thisTitle = useTitle();

console.log(thisTitle.value);

thisTitle.value = "Abu Kof";
</script>

<template>
	<label for="page-title">Page title:</label>
	<input type="text" id="page-title" v-model="thisTitle" />
</template>

<style scoped>

</style>
