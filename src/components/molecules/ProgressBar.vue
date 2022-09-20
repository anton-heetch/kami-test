<script setup>
import { MDBProgress, MDBProgressBar } from 'mdb-vue-ui-kit'

defineProps({
	progressNumber: {
		type: Number,
		default: 0,
	},
})
</script>
<template>
	<MDBProgress>
		<MDBProgressBar :value="progressNumber" />
	</MDBProgress>
</template>
