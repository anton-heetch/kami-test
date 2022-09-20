<script setup>
import { useProductsStore } from './stores/product/products.js'
import { onBeforeMount } from 'vue'

const { fetchListings } = useProductsStore()

onBeforeMount(async () => {
	await fetchListings()
})
</script>
<template>
	<div class="main">
		<router-view />
	</div>
</template>
<style lang="scss" scoped>
.main {
	height: 100vh;
	margin-top: 40px;
	position: relative;
	width: 100%;
}
</style>
