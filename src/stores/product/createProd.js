import { defineStore, storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { doc, setDoc } from 'firebase/firestore'
import db from '../../../firebase.config.js'
import { useProdImagesStore } from './prodImages.js'
import { useProductsStore } from './products.js'

export const useCreateProd = defineStore('createProd', () => {
	const { tempImages } = storeToRefs(useProdImagesStore())
	const { fetchListings } = useProductsStore()

	const state = reactive({
		title: '',
		description: '',
		priceForAll: '',
		prices: {
			almaty: '',
			astana: '',
		},
		isActive: false,
	})

	const samePrice = () => {
		for (let item in state.prices) {
			state.prices[item] = state.priceForAll
		}
	}

	const resetState = () => {
		state.title = ''
		state.description = ''
		state.priceForAll = ''
		state.prices = {
			almaty: '',
			astana: '',
		}
		state.isActive = false
		tempImages.value = []
	}

	const addToServer = async (uid) => {
		await setDoc(doc(db, 'listings', uid), {
			title: state.title,
			description: state.description,
			imageUrls: tempImages.value,
			isActive: state.isActive,
			cityPrice: JSON.stringify(state.prices),
		}).catch((e) => console.log('Ошибка загрузки: ' + e))

		await fetchListings()
	}

	return { state, samePrice, addToServer, resetState }
})
