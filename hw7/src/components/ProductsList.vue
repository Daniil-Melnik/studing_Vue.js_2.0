<template>
	<div>
		<h1>Каталог</h1>
		<div class="row">
			<div class="table-ab">
				<table class="main-table-cat">
					<tr>
						<th>№</th>
						<th></th>
						<th>Наименование</th>
						<th>Цена</th>
						<th></th>
					</tr>
					<tr v-for="p, i in products" :key="i">
						<td class="td-num">{{ i + 1 }}</td>
						<td class="td-img-cat"><img :src="require(`@/assets/${p.img}`)"/></td>
						<td class="td-name">{{ p.name }}</td>
						<td class="td-price">{{ p.price }}</td>
						<td class="td-info">
							<router-link :to="'/products/' + p.id ">
								Подробнее
							</router-link>
						</td>
						<td>
							<button v-if="isInCart(i, this.$store.state.cart)"
									class="add-btn"
									@click="addToCart(p, this.$store.state.cart)"
									>
								В корзину
							</button>
							<button  v-else
									class="remove-btn"
									@click="removeFromCart(p.id, this.$store.state.cart)">
								Убрать
							</button>
						</td>
					</tr>
				</table>
				</div>
			</div>
			<button class="before-btn" @click="goBack">Назад</button>
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
				this.$store.commit('upd', {cart: cart})
				console.log(this.$store.cart)
			},

			addToCart(product, cart){
				cart.push(product)
				console.log(cart)
				this.$store.commit('upd', {cart: cart})
				console.log(this.$store.cart)
			}
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}

	.main-table-cat{
		width: 900px;
	}
	
	.main-table-cat tr {
		height: 35px;
		font-size: 1.3em;
		color: rgb(0, 17, 61);
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
	.main-table-cat td {
		border-radius: 8px;
	}
	
	.main-table-cat th {
		border-radius: 8px;
		background-color: rgb(122, 189, 255);
	}

	.td-img-cat img {
		width: 35px;
		height: 35px;
	}
	
	.td-img-cat {
		width: 35px;
		background-color: rgb(243, 249, 255);
		text-align: center;
	}

	.td-info {
		width: 90px;
		background-color: rgb(243, 249, 255);
		text-align: center;
		color: rgb(0, 17, 61);
		text-decoration: none;
	}

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
</style>
