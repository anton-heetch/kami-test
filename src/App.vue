<script setup>
import Navigation from './components/organism/Navigation.vue'
</script>
<template>
	<div class="main">
		<Navigation />
		<router-view />
	</div>
</template>
<style lang="scss" scoped>
.main {
	height: 100vh;
}
</style>
