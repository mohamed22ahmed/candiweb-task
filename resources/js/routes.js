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
];

export default {}
