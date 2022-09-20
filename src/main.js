import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import Index from './pages/Index.vue'
import Products from './pages/products/Index.vue'
import ProdCreate from './pages/products/Create.vue'
import EditProduct from './pages/products/edit/[slug].vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import 'mdb-vue-ui-kit/css/mdb.min.css'

const pinia = createPinia()

const routes = [
	{ path: '/', component: Products },
	{ path: '/products/create', component: ProdCreate },
	{ path: '/products/edit/:id', component: EditProduct },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
