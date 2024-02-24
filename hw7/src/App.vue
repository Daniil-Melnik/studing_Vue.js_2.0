<template>
  
  <div>
    <router-link :to="{ name: 'Cart' }">
      <a>Карта</a>
    </router-link>
    <router-view />
</div>

</template>

<script>
export default {
  

  name: 'App',

  data(){
    return{
      menuList: [
			{
				url: '/products',
				text: 'Products List'
			},
			{
				url: '/cart',
				text: 'Your Cart'
			},
			{
				url: '/checkout',
				text: 'Order Now'
			}
		]
    }
  },

  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
