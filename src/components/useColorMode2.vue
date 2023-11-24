<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const colorMode = useColorMode({
	// Uncomment if you'de like to use auto
	// emitAuto: true,
	modes: {
		dim: "dim",
		cafe: "cafe",
	},
	attribute: "theme",
});
</script>

<template>
	<div>
		<pre>{{ colorMode }}</pre>
		<span class="group-buttons">
			<!-- <button :class="{ active: colorMode === 'auto' }" @click="colorMode = 'auto'">System</button> -->
			<button :class="{ active: colorMode === 'dark' }" @click="colorMode = 'dark'">Dark</button>
			<button :class="{ active: colorMode === 'light' }" @click="colorMode = 'light'">Light</button>
			<button :class="{ active: colorMode === 'dim' }" @click="colorMode = 'dim'">Dim</button>
			<button :class="{ active: colorMode === 'cafe' }" @click="colorMode = 'cafe'">Cafe</button>
		</span>
	</div>
</template>
<style lang="scss">
.group-buttons {
	button {
		font-size: smaller;
		border-radius: 0;
		&:first-child {
			border-radius: var(--border-radius) 0 0 var(--border-radius);
		}
		&:last-child {
			border-radius: 0 var(--border-radius) var(--border-radius) 0;
		}
	}
}
.active {
	color: var(--color-success);
	font-weight: bold;
	border-color: var(--color-success);
}
</style>
