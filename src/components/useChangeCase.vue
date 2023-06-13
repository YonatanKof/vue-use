<script setup>
import { useChangeCase } from '@vueuse/integrations/useChangeCase';
const prase = "It's the only chance we're given";
const capitalCase = useChangeCase('You sustain the rhythm', 'capitalCase');
const sentenceCase = useChangeCase("I'll maintain the beat", 'sentenceCase');
const camelCase = useChangeCase(prase, 'camelCase');
</script>
<template>
	<div>
		<h2>{{ capitalCase }}</h2>
		<h2>{{ sentenceCase }}</h2>
		<h2>{{ camelCase }}</h2>
	</div>
</template>
