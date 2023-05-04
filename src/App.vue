<script setup>
import Colors from './components/useDarkColorMode.vue';

const theseLinks = [
	{ to: '/', title: 'Home' },
	{ to: '/use-title', title: 'Page title' },
	{ to: '/use-clipboard', title: 'Clipboard' },
	{ to: '/use-dark-color-mode', title: 'Dark mode and themes' },
	{ to: '/on-key-stroke', title: 'Key stroke' },
	{ to: '/use-device-sensors', title: 'Device sensors' },
	{ to: '/use-mouse-and-touch', title: 'Mouse & touch' },
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
			<!-- <div>
				<router-link to="/">Home</router-link>
				<router-link to="/use-title">Page title</router-link>
				<router-link to="/use-clipboard">Clipboard</router-link>
				<router-link to="/use-dark-color-mode">Dark mode and themes</router-link>
				<router-link to="/on-key-stroke">Key stroke</router-link>
				<router-link to="/use-device-sensors">Device sensors</router-link>
				<router-link to="/use-mouse-and-touch">Mouse & touch</router-link>
			</div> -->
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
