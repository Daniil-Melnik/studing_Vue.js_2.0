<template>
	<div>
		<img :src="require(`@/assets/${isContactImg}`)"/>
		<h1>{{ product.name }}</h1>
		<h3>{{ product.price }}</h3>
		<button v-if="isInCart(product.id, this.$store.state.cart)"
			class="btn btn-primary"
			@click="addToCart(product, this.$store.state.cart)">
				В корзину
		</button>
		<button v-else
			class="btn btn-warning"
			@click="removeFromCart(product.id, this.$store.state.cart)">
				Убрать
		</button>
		<button @click="goBack">Назад</button>
	</div>
</template>

<script>
	export default {
		name: "ShopProduct",
		data(){
			return{
				id: null,
				product: null,
				isContactImg: null
			}
		},
		beforeMount(){
			this.id = this.$route.params.id
			this.product = this.$store.state.products.find(p => p.id == this.id)
			this.isContactImg = this.product.img
		},
		methods: {
			goBack() {
			this.$router.go(-1);
		},
		isInCart(ind, cart){
			let us = true
			for (let i = 0; i < cart.length; i++) {
				let us1 = us
				cart[i].id === ind ? us = false : us = us1
			}
			return us
		},
		removeFromCart(i, cart){
				cart = cart.filter(c => c.id !== i);
				this.$store.commit('upd', {cart: cart})
				console.log(this.$route.name)
			},

		addToCart(product, cart){
			cart.push(product)
			this.$store.commit('upd', {cart : cart})
		}
		},
	}
</script>