<script setup>
import { useTitle } from "@vueuse/core";

const thisTitle = useTitle();

console.log(thisTitle.value);

thisTitle.value = "Kof tov";

</script>

<template>
	<h1>Yo</h1>
	<input type="text" v-model="thisTitle" />
</template>
