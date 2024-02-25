<template>
	<div>
		<h1>Каталог</h1>
		<button @click="goBack">Назад</button>
		<div class="row">
			<div class="col col-sm-4" 
				v-for="product, i in products" :key="i">
				<a><h3>{{ product.name }}</h3></a>
				<div>{{ product.price }}</div>
				<button v-if="isInCart(i, this.$store.state.cart)"
						class="btn btn-primary"
						@click="addToCart(product, this.$store.state.cart)"
						>
					В корзину
				</button>
				<button v-else
						class="btn btn-warning"
						@click="removeFromCart(i, this.$store.state.cart)"
				>
					Убрать
				</button>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data(){
			return{
				products : this.$store.state.products
			}
		},
		created(){
		},
		computed: {
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
				this.$store.commit('upd', cart)
			},

			addToCart(product, cart){
				cart = cart.push(product)
				this.$store.commit('upd', cart)
			}
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>