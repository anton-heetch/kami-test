<script setup>
import QuillEditor from '../molecules/QuillEditor.vue'
import MediaUpload from '../molecules/MediaUpload.vue'
import { MDBInput, MDBCheckbox, MDBBtn, MDBRow } from 'mdb-vue-ui-kit'
import { v4 as uuidv4 } from 'uuid'
import { storeToRefs } from 'pinia'
import { useCreateProd } from '../../stores/product/createProd.js'
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { createToaster } from '@meforma/vue-toaster'

const router = useRouter()

const props = defineProps({
	isUpdate: {
		type: Boolean,
		default: false,
	},
	prodId: {
		type: String,
		default: '',
	},
})
const toaster = createToaster()
const { state } = storeToRefs(useCreateProd())
const { samePrice, addToServer, resetState, formValidate } = useCreateProd()
const isPriceForAll = ref(false)

const providedId = () => {
	return props.isUpdate ? props.prodId : uuidv4()
}

const checkForm = (e) => {
	if (formValidate().length === 0) {
		addToServer(providedId())
		resetState()
		router.push({ path: '/' })
		props.isUpdate
			? toaster.info('Данные товара обновлены!')
			: toaster.success('Товар успешно добавлен!')
	} else toaster.error('Обязательные поля не заполнены')
}

const resetForm = () => {
	resetState()
	router.push({ path: '/' })
}

watch(isPriceForAll, () => {
	if (isPriceForAll.value) samePrice()
})
</script>
<template>
	<MDBRow
		tag="form"
		class="needs-validation"
		novalidate
		@submit.prevent="checkForm"
	>
		<div class="form__title">
			<MDBInput
				type="text"
				label="Название"
				v-model="state.title"
				:class="formValidate().includes('title') ? 'is-invalid' : ''"
			/>
		</div>
		<div class="form__available">
			<MDBCheckbox label="Доступен в продажу" v-model="state.isActive" />
		</div>

		<div class="form__desc">
			Описание
			<QuillEditor v-model:content="state.description" />
		</div>

		<div class="form__upload">
			<span :class="formValidate().includes('images') ? 'is-invalid' : ''"
				>Загрузить изображение</span
			>
			<MediaUpload />
		</div>

		<div class="prices">
			Цена
			<div class="prices__oneForAll">
				<MDBCheckbox
					label="Одна цена для всех городов"
					v-model="isPriceForAll"
				/>
				<MDBInput
					type="text"
					label="На все города"
					class="prices__price"
					v-model="state.priceForAll"
					@keyup="isPriceForAll ? samePrice() : null"
				/>
			</div>
			<div class="prices__cities">
				<MDBInput
					type="text"
					label="Алматы"
					class="prices__price"
					:class="formValidate().includes('almaty') ? 'is-invalid' : ''"
					v-model="state.prices.almaty"
				/>
				<MDBInput
					type="text"
					label="Астана"
					class="prices__price"
					:class="formValidate().includes('astana') ? 'is-invalid' : ''"
					v-model="state.prices.astana"
				/>
			</div>
		</div>
		<div class="footer">
			<MDBBtn type="button" outline="primary" @click.native="resetForm"
				>Отмена</MDBBtn
			>
			<MDBBtn type="submit" color="success">{{
				isUpdate ? 'Сохранить' : 'Добавить'
			}}</MDBBtn>
		</div>
	</MDBRow>
</template>
<style lang="scss">
form {
	display: flex;
	flex-direction: column;
	text-align: left;
	padding-bottom: 60px;

	span.is-invalid {
		color: red;
	}

	.form-control:invalid,
	.form-control:valid {
		margin-bottom: 0 !important;
	}

	.form__title,
	.form__available,
	.form__desc,
	.form__upload {
		margin-top: 30px;
	}

	.prices {
		display: flex;
		flex-direction: column;
		margin: 30px 0;

		&__oneForAll {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 16px;

			.form-outline {
				margin-bottom: 0 !important;
			}
		}

		.form-outline {
			margin-bottom: 16px;
			position: relative;

			&:after {
				content: '₸';
				position: absolute;
				right: 16px;
				top: 50%;
				transform: translateY(-50%);
				line-height: 1;
			}
		}
	}

	.footer {
		display: flex;
		justify-content: space-between;
		button {
			width: 100%;

			&:not(:last-child) {
				margin-right: 16px;
			}
		}
	}
}
</style>
