<script setup>
</script>

<template>
	<main>
		<header>
			<router-link to="/">Home</router-link> | 
			<router-link to="/use-mouse-and-touch">usePageLeave</router-link> |
			<router-link to="/use-device-sensors">useBattery, useOnline, useNetwork, useGeolocation</router-link> |
			<router-link to="/use-title">useTitle</router-link> |
			<router-link to="/use-clipboard">useClipboard</router-link> |
			<router-link to="/use-dark-color-mode">useDarkColorMode</router-link> |
			<router-link to="/on-key-stroke">onKeyStroke</router-link>
		</header>
		<section>
			<router-view />
		</section>
	</main>
</template>

<style>
main {
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr;
}
section {
	text-align: start;
	padding: 2rem;
}
</style>
