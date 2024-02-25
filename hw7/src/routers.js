import { createWebHistory, createRouter } from 'vue-router'
import Cart from '@/components/Cart.vue'
import Product from '@/components/Product.vue'
import ProductList from '@/components/ProductsList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/ProductList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/products/:id',
      component: Product
    },
  ]
})

export default router
