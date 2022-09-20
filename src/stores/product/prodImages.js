import { defineStore } from 'pinia'
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
	deleteObject,
} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { reactive, toRef } from 'vue'

export const useProdImagesStore = defineStore('prodImages', () => {
	const state = reactive({
		tmpImg: [],
		progress: 0,
		isUploading: false,
	})

	const tempImages = toRef(state, 'tmpImg')
	const uploadProgress = toRef(state, 'progress')
	const isUploading = toRef(state, 'isUploading')

	// Upload image
	const attachFiles = (event) => {
		const storage = getStorage()
		const storageRef = ref(storage, `/kami-images/${uuidv4()}`)

		if (event.target.files.length) {
			const uploadTask = uploadBytesResumable(storageRef, event.target.files[0])
			isUploading.value = true

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					uploadProgress.value = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					)
				},
				(e) => {
					console.log('Uploading error: ' + e)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((res) =>
						tempImages.value.push({
							imgUrl: res,
							imgStorePath: uploadTask.snapshot.ref.fullPath,
						})
					)
					isUploading.value = false
				}
			)
		}
	}

	// Delete uploaded image
	const deleteAttached = (event, imgName) => {
		const storage = getStorage()
		const uploadedRef = ref(storage, imgName)

		deleteObject(uploadedRef)
			.then((res) => {
				tempImages.value.map((el, ind) => {
					if (el.imgStorePath === imgName) tempImages.value.splice(ind, 1)
				})
				console.log('File deleted')
				event.target.parentElement.parentElement.remove()
			})
			.catch((e) => {
				console.log('Deleting error: ' + e)
			})
	}

	return {
		attachFiles,
		deleteAttached,
		tempImages,
		uploadProgress,
		isUploading,
	}
})
