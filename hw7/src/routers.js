import { createWebHistory, createRouter } from 'vue-router'
import Cart from '@/components/Cart.vue'
import Product from '@/components/Product.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product
      }
  ]
})

export default router
