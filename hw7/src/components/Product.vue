<template>
	<div>
		<div class="cart-title-container">
			<h1>{{ product.name }}</h1>
			<img class="cart-img" :src="require(`@/assets/${isContactImg}`)"/>
			<h3>Цена: {{ product.price }} руб.</h3>
		</div>
		<div class="cart-container">
			<p>Корзина:</p>
			<button v-if="isInCart(product.id, this.$store.state.cart)"
			class="add-btn"
			@click="addToCart(product, this.$store.state.cart)">
				В корзину
			</button>
			<button v-else
				class="remove-btn"
				@click="removeFromCart(product.id, this.$store.state.cart)">
					Убрать
			</button>
		</div>
		<div class="befor-btn-ab">
			<button class="before-btn" @click="goBack">Назад</button>
		</div>
		
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

<style>
.add-btn{
	height: 23px;
	width: 80px;
	margin-left: 8px;
	border: 0;
	background-color: rgb(175, 255, 129);
	border-radius: 10px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: rgb(0, 17, 61);
	transition: 0.6s;
}
.add-btn:hover {
background-color: rgb(0, 103, 0);
color: rgb(203, 229, 255);
transform: scale(1.3);
}

.remove-btn{
height: 23px;
width: 80px;
margin-left: 8px;
border: 0;
background-color: rgb(255, 129, 129);
border-radius: 10px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: rgb(0, 17, 61);
transition: 0.6s;
}
.remove-btn:hover {
background-color: rgb(199, 0, 0);
color: rgb(203, 229, 255);
transform: scale(1.3);
}

.cart-container {
	margin-left: 0;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.cart-container p {
	font-size: 20px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: rgb(0, 41, 145);
}

.cart-title-container {
	text-align: center;
}

.before-btn{
	height: 23px;
	width: 80px;
	border: 0;
	background-color: rgb(124, 190, 255);
	border-radius: 10px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: rgb(0, 17, 61);
	transition: 0.6s;
	margin-top: 5px;
}

.before-btn:hover {
	background-color: rgb(0, 17, 61);
	color: rgb(203, 229, 255);
	transform: scale(1.3);
}

.before-btn-ab {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100px;
}

</style>