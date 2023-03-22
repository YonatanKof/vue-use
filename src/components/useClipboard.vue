<script setup>
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";

const source = ref("Abu Kof");
const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
	<div v-if="isSupported">
		<span>
			<label for="copy-input">Copy text form here:</label> 
            <input type="text" v-model="source" id="copy-input" />
		</span>
		<button @click="copy(source)">
			<!-- by default, `copied` will be reset in 1.5s -->
			<span v-if="!copied">Copy</span>
			<span v-else>Copied!</span>
		</button>
		<p>
			Current copied: <code>{{ text || "none" }}</code>
		</p>
	</div>
	<p v-else>Your browser does not support Clipboard API</p>
</template>

<style scoped>
div {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
