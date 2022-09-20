<script setup>
import { useProductsStore } from '../../stores/product/products.js'
import ProductItem from '../../components/organism/ProductItem.vue'
import { storeToRefs } from 'pinia'
import Loader from '../../components/atoms/Loader.vue'

const { products, isLoading } = storeToRefs(useProductsStore())
</script>
<template>
	<transition>
		<Loader v-if="isLoading" />
	</transition>
	<div class="products__title">
		<h1>Каталог продуктов</h1>
		<router-link to="/products/create" class="btn btn-success"
			><b>+</b> Добавить продукт</router-link
		>
	</div>
	<div class="row">
		<div>
			<ProductItem
				v-for="item in products"
				:key="item.id"
				:images="item.data.imageUrls"
				:title="item.data.title"
				:description="item.data.description"
				:is-active="item.data.isActive"
				:price="JSON.parse(item.data.cityPrice)"
			/>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.row {
	width: 100%;
	margin: 0;
}
.products__title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
}
h1 {
	margin: 0;
}
.card {
	margin-bottom: 20px;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
