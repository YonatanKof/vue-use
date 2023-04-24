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
	<p><pre>isSupported: {{ isSupported }}</pre> Is the device supporting this API.</p>
	<p><pre>charging: {{ charging }}</pre> If the device is currently charging.</p>
    <p><pre>chargingTime: {{ chargingTime }}</pre> The number of seconds until the device becomes fully charged.</p>
    <p><pre>dischargingTime: {{ dischargingTime }}</pre> The number of seconds before the device becomes fully discharged.</p>
    <p><pre>level: {{ level }}</pre> A number between 0 and 1 representing the current charge level.</p>
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
