import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import AppComponents from './App.vue'
import ProductList from './views/ProductList.vue'
import About from './views/About.vue'
import AddProduct from './views/AddProduct.vue'

const routes = [{
        path: '/',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/addProduct',
        name: 'AddProduct',
        component: AddProduct
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(AppComponents).use(router).mount("#app")
