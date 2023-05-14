<script setup>
import useMouseAndTouchDraw from "../components/useMouseAndTouchDraw.vue";
import useMouseAndTouch from "../components/useMouseAndTouch.vue";
import onLongPress from "../components/onLongPress.vue";
</script>
<template>
    <h1>Mouse & touch</h1>
    <p>Here we're using:</p>
    <ul>
        <li><code><a href="https://vueuse.org/core/usePageLeave/#usepageleave" target="_blank">usePageLeave</a></code></li>
        <li><code><a href="https://vueuse.org/core/usePointer/#usepointer" target="_blank">usePointer</a></code></li>
        <li><code><a href="https://vueuse.org/shared/whenever/#whenever" target="_blank">whenever</a></code></li>
        <li>Vue's <code><a href="https://vuejs.org/guide/essentials/watchers.html#watchers" target="_blank">unwatch</a></code></li>
    </ul>
	<onLongPress />
	<useMouseAndTouch />
    <h2>useMouseAndTouchDraw</h2>
	<useMouseAndTouchDraw />
</template>
