import { createWebHistory, createRouter } from 'vue-router'
import Cart from '@/components/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router
