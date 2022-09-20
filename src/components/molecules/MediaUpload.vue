<script setup>
import { v4 as uuidv4 } from 'uuid'
import { useProdImagesStore } from '../../stores/product/prodImages.js'
import { storeToRefs } from 'pinia'
import DeleteBtn from '../atoms/DeleteBtn.vue'
import ProgressBar from '../molecules/ProgressBar.vue'
import PictureIcon from '../atoms/PictureIcon.vue'

const { attachFiles, deleteAttached } = useProdImagesStore()
const { tempImages, uploadProgress, isUploading } = storeToRefs(
	useProdImagesStore()
)
</script>
<template>
	<div class="image__upload">
		<label class="btn btn-primary ripple-surface">
			<PictureIcon />
			<input
				type="file"
				accept="image/png, image/jpg, image/gif, image/jpeg"
				@change="attachFiles"
				required
			/>
		</label>
		<div v-for="item in tempImages" :key="uuidv4()" class="imgCont__item">
			<img :src="item.imgUrl" alt="" />
			<DeleteBtn @click.native="deleteAttached($event, item.imgStorePath)" />
		</div>
	</div>
	<ProgressBar :progress-number="uploadProgress" v-if="isUploading" />
</template>
<style lang="scss" scoped>
.progress {
	margin-bottom: 20px;
}
.image__upload {
	position: relative;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

	.imgCont__item {
		position: relative;
		width: 100px;
		height: 100px;
		margin: 0 16px 16px 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

label {
	position: relative;
	white-space: nowrap;
	margin: 0 16px 16px 0;
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}

input[type='file'] {
	display: none;
}
</style>
