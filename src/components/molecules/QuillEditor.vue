<script setup>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
</script>
<template>
	<QuillEditor
		theme="snow"
		content-type="text"
		toolbar="essential"
		placeholder="Введите описание"
	/>
</template>
