<script setup>
import Colors from './components/useColorMode.vue';
const theseLinks = [
	{ to: '/', title: 'Home' },
	{ to: '/form', title: 'Contact Me!' },
	{ to: '/success', title: 'Success!' },
	{ to: '/use-title', title: 'Page title' },
	{ to: '/use-clipboard', title: 'Clipboard' },
	{ to: '/use-dark', title: 'Use dark' },
	{ to: '/use-color-mode', title: 'Color mode' },
	{ to: '/use-color-mode-2', title: 'Color mode 2' },
	{ to: '/on-key-stroke', title: 'Key stroke' },
	{ to: '/use-device-sensors', title: 'Device sensors' },
	{ to: '/use-mouse-and-touch', title: 'Mouse & touch' },
	{ to: '/use-change-case', title: 'Change case' },
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
