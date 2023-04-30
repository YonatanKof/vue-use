<script setup>
import { useBattery, useOnline, useNetwork, useGeolocation } from "@vueuse/core";

const { isSupported, charging, chargingTime, dischargingTime, level } = useBattery();
const battery = useBattery();
const online = useOnline()
// const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()
const network = useNetwork()
// const { coords, locatedAt, error, resume, pause } = useGeolocation()
const geolocation = useGeolocation()

</script>

<template>
    <h3>useBattery</h3>
	<p>Is the device supporting this API. <pre>isSupported: {{ isSupported }}</pre></p>
	<p>If the device is currently charging. <pre>charging: {{ charging }}</pre></p>
    <p>The number of seconds until the device becomes fully charged. <pre>chargingTime: {{ chargingTime }}</pre></p>
    <p>The number of seconds before the device becomes fully discharged. <pre>dischargingTime: {{ dischargingTime }}</pre></p>
    <p>A number between 0 and 1 representing the current charge level. <pre>level: {{ level }}</pre></p>
    <hr>
	<code>{{ battery }}</code>
    <hr>
    <h3>useOnline</h3>
    <pre>useOnline: {{ online }}</pre>
    <hr>
    <h3>useNetwork</h3>
    <pre>{{ network }}</pre>
    <hr>
    <h3>useGeolocation</h3>
    <pre>{{ geolocation }}</pre>
</template>

<style scoped>
p {
    margin-block-end: 2rem;
}
</style>