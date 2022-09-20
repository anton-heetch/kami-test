<script setup>
import { MDBCard, MDBCardBody, MDBBadge, MDBCardFooter } from 'mdb-vue-ui-kit'
defineProps({
	title: {
		type: String,
		default: 'title',
	},
	description: {
		type: String,
		default: 'description',
	},
	isActive: {
		type: Boolean,
		default: true,
	},
	images: {
		type: Array,
		default: [],
	},
	price: {
		type: Object,
		default: {},
	},
})
</script>
<template>
	<Transition>
		<MDBCard>
			<MDBCardBody>
				<div class="d-flex justify-content-between align-items-center">
					<div class="d-flex" style="text-align: left">
						<img
							:src="images[0].imgUrl"
							:title="title"
							style="width: 100px; height: 100px"
						/>
						<div class="ms-3">
							<p class="fw-bold mb-1">{{ title }}</p>
							<MDBBadge
								class="rounded-pill"
								:class="isActive ? 'badge-success' : 'badge-danger'"
							>
								{{ isActive ? 'Доступен' : 'Не доступен' }}
							</MDBBadge>
							<p class="text-muted mb-0">{{ description }}</p>
							<p class="text-muted mb-0 fw-bold">Цена: {{ price.almaty }} ₸</p>
						</div>
					</div>
				</div>
			</MDBCardBody>
			<MDBCardFooter
				class="border-0 bg-light p-2 d-flex justify-content-around"
			>
				<router-link :to="`/products/edit/${title}`">Редактировать</router-link>
			</MDBCardFooter>
		</MDBCard>
	</Transition>
</template>
<style lang="scss">
.rounded-pill {
	text-transform: uppercase;
	font-size: 12px;
	line-height: 22px;
	font-weight: bold;
	padding: 0 12px;
	white-space: nowrap;
}
</style>
