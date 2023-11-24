<script setup lang="ts">
import { watchEffect } from 'vue'
import { useColorMode, useCycleList } from "@vueuse/core";

const colorMode = useColorMode({
	emitAuto: true,
	modes: {
		dim: "dim",
		cafe: "cafe",
	},
	attribute: "theme",
});
const { state, next } = useCycleList(['auto', 'dark', 'light', 'cafe', 'dim'], { initialValue: colorMode.value })

watchEffect(() => colorMode.value = state.value as any)
</script>

<template>
	<div>
		<button @click="next()">
			<i v-if="state === 'auto'" />
			<i v-if="state === 'dark'" />
			<i v-if="state === 'light'" />
			<i v-if="state === 'cafe'" />
			<i v-if="state === 'dim'" />
			<span>{{ state }}</span>
		</button>
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
