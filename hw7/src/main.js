/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Cart from './components/Cart.vue'
const router = createRouter({
  routes: [
  {
  path: '/Cart',
  name: "Cart",
  component: Cart
  },
],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
