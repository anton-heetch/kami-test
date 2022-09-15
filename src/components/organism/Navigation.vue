<script setup>
import TabMenu from 'primevue/tabmenu'

const items = [
	{ label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
	{ label: 'Products', icon: 'pi pi-fw pi-calendar', to: '/products' },
	{
		label: 'Add New Product',
		icon: 'pi pi-fw pi-pencil',
		to: '/products/create',
	},
]
</script>
<template>
	<nav>
		<TabMenu :model="items" />
	</nav>
</template>
<style lang="scss" scoped>
nav {
	margin-bottom: 40px;
}
</style>
