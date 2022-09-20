import { defineStore } from 'pinia'
import { collection, getDocs, query, limit } from 'firebase/firestore'
import db from '../../../firebase.config.js'
import { reactive, toRef } from 'vue'

export const useProductsStore = defineStore('products', () => {
	const state = reactive({
		products: [],
		isLoading: true,
	})

	const products = toRef(state, 'products')
	const isLoading = toRef(state, 'isLoading')

	const fetchListings = async () => {
		try {
			const productsRef = collection(db, 'listings')
			const q = query(productsRef)
			const querySnap = await getDocs(q)
			products.value = []
			querySnap.forEach((doc) => {
				products.value.push({
					id: doc.id,
					data: doc.data(),
				})
			})
			state.isLoading = false
		} catch (e) {
			throw new Error(e)
		}
	}

	return { fetchListings, products, isLoading }
})
