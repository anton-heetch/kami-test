<script setup>
import { MDBNavbar, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit'
</script>
<template>
	<MDBNavbar light bg="light" expand="lg" container>
		<MDBNavbarNav collapse="navbarNav">
			<MDBNavbarItem to="/"> Главная </MDBNavbarItem>
			<MDBNavbarItem to="/products"> Продукты </MDBNavbarItem>
			<MDBNavbarItem to="/products/create"> Добавить продукт </MDBNavbarItem>
		</MDBNavbarNav>
	</MDBNavbar>
</template>
<style lang="scss" scoped>
nav {
	margin-bottom: 40px;

	.navbar-nav {
		flex-direction: row;

		li {
			margin-right: 20px;
		}
	}
}
</style>
