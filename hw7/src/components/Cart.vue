<template>
	<div>
		<button @click="goBack">Назад</button>
		<button @click="clearCart">Очистить</button>
		<p v-for="c in cart" :key="c.id">{{ c.name }}</p>
	</div>
</template>

<script>
export default {
	name: "ShopCart",

	data(){
		return{
			cart: this.$store.state.cart
		}
	},

	methods: {
		goBack() {
			this.$router.go(-1);
		},
		clearCart(){
			this.$store.commit('upd', {cart: []})
			this.cart = []
		}
	}
}
</script>
