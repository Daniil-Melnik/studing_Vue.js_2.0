import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js' // импортируем созданный store

createApp(App).use(store).mount('#app')
