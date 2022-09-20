<script setup>
import Form from '../../../components/organism/Form.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '../../../stores/product/products.js'
import { useCreateProd } from '../../../stores/product/createProd.js'
import { useProdImagesStore } from '../../../stores/product/prodImages.js'
import { storeToRefs } from 'pinia'

const route = useRoute()
const { products } = storeToRefs(useProductsStore())
const { state } = storeToRefs(useCreateProd())
const { tempImages } = storeToRefs(useProdImagesStore())
let curProd = ref({})
let curProdId = ref('')

onBeforeMount(() => {
	const curProdFull = products.value.filter(
		(el) => el.data.title === route.params.id
	)[0]

	curProd.value = curProdFull.data
	curProdId.value = curProdFull.id

	state.value.title = curProd.value.title
	state.value.description = curProd.value.description
	state.value.prices = JSON.parse(curProd.value.cityPrice)
	state.value.isActive = curProd.value.isActive
	tempImages.value = curProd.value.imageUrls
})
</script>
<template>
	<h1>edit product</h1>
	<Form :is-update="true" :prod-id="curProdId" />
</template>
