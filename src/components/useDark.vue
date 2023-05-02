<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	{{ isDark }}
	<button @click="toggleDark()">Toggle me</button>
</template>