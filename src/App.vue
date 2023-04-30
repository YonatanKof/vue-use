<script setup>
import Colors from "./components/useDarkColorMode.vue";

const theseLinks = [
	{ to: "/", title: "Home" },
	{ to: "/use-title", title: "Page title" },
	{ to: "/use-clipboard", title: "Clipboard" },
	{ to: "/use-dark-color-mode", title: "Dark mode and themes" },
	{ to: "/on-key-stroke", title: "On key stroke" },
	{ to: "/use-device-sensors", title: "Use device sensors" },
	{ to: "/use-mouse-and-touch", title: "On page leave" },
];
</script>

<template>
	<main>
		<header>
			<Colors />
			<div>
				<template v-for="(link, index) in theseLinks">
					<template id="separator" v-if="index > 0"><span>•</span></template>
					<router-link :to="link.to">{{ link.title }}</router-link>
				</template>
			</div>
		</header>
		<section>
			<router-view />
		</section>
	</main>
</template>

<style lang="scss" scoped>
span {
	margin-inline: 0.5rem;
}
header {
	padding-block: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
