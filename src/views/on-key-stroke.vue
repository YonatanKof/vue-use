<script setup>
import onKeyStroke from "../components/onKeyStroke.vue";
</script>
<template>
    <h1>onKeyStroke</h1>
    <p>Use the arrow keys to move around the circle below. You can add the <code>shift</code> modifier key to move faster <strong>or</strong> the <code>shift</code> + <code>control</code> to move even faster</p>
    <p>This one is using the following:</p>
    <ul>
        <li><a href="https://vueuse.org/core/onKeyStroke/">onKeyStroke</a></li>
        <li><a href="https://vueuse.org/core/useMagicKeys/">useMagicKeys</a></li>
        <li><a href="https://vueuse.org/shared/whenever/">whenever</a></li>
    </ul>
	<onKeyStroke />
</template>
