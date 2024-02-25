<template>
	<div>
		
		<div class="head-container">
			<h1>Корзина</h1>
			<div class="button-container">
				<button @click="clearCart">Очистить</button>
			</div>
			
		</div>
		
		<div class="table-ab">
		<table class="main-table">
			<tr>
				<th>№</th>
				<th></th>
				<th>Наименование</th>
				<th>Цена</th>
			</tr>
			<tr v-for="c, i in cart" :key="i">
				<td class="td-num">{{ i + 1 }}</td>
				<td class="td-img"><img :src="require(`@/assets/${c.img}`)"/></td>
				<td class="td-name">{{ c.name }}</td>
				<td class="td-price">{{ c.price }}</td>
				<td class="td-btn"><button class="del-btn" @click="removeFromCart(c.id, this.$store.state.cart)">Удалить</button></td>
			</tr>
			<tr>
				<td colspan="2"></td>
				<td>Итого</td>
				<td>{{ summ }}</td>
			</tr>
		</table>
		</div>
		<button class="before-btn" @click="goBack">Назад</button>
	</div>
</template>

<script>
export default {
	name: "ShopCart",

	data(){
		return{
			cart: this.$store.state.cart,
			summ: 0
		}
	},

	beforeMount(){
		for (let i = 0; i < this.cart.length; i++){
				this.summ += this.cart[i].price
		}
	},

	methods: {
		goBack() {
			this.$router.go(-1);
		},
		clearCart(){
			this.$store.commit('upd', {cart: []})
			this.cart = []
			this.summ = 0
		},

		updSumm(){
			this.summ = 0
			for (let i = 0; i < this.cart.length; i++){
				this.summ += this.cart[i].price
			}
		},

		removeFromCart(i, cart){
			cart = cart.filter(c => c.id !== i);
			this.$store.commit('upd', {cart: cart})
			this.cart = this.$store.state.cart
			this.updSumm()
			console.log(this.$route.name)
		},
	}
}
</script>

<style>
.head-container{
	width: 100%;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.head-container button{
	height: 23px;
	width: 80px;
	margin-left: 8px;
	border: 0;
	background-color: rgb(203, 229, 255);
	border-radius: 10px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: rgb(0, 17, 61);
	transition: 0.6s;
}

.head-container button:hover{
	background-color: rgb(0, 17, 61);
	color: rgb(203, 229, 255);
	transform: scale(1.3);
}

.button-container {
	margin-left: 5px;
}

.table-ab {
	display: flex;
	width: 100%;
	justify-content: center;
}

.main-table{
	width: 800px;
}

.main-table tr {
	height: 25px;
	font-size: 1.3em;
	color: rgb(0, 17, 61);
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.td-price{
	text-align: center;
	width: 80px;
	background-color: rgb(243, 249, 255);
}

.main-table td {
	border-radius: 8px;
}

.main-table th {
	border-radius: 8px;
	background-color: rgb(122, 189, 255);
}

.td-num {
	text-align: center;
	width: 50px;
	background-color: rgb(243, 249, 255);
}

.td-name {
	background-color: rgb(243, 249, 255);
}

.td-btn{
	width: 80px;
}

.td-btn button {
	height: 23px;
	width: 80px;
	margin-left: 8px;
	border: 0;
	background-color: rgb(203, 229, 255);
	border-radius: 10px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: rgb(0, 17, 61);
	transition: 0.6s;
}

.td-btn button:hover {
	background-color: rgb(0, 17, 61);
	color: rgb(203, 229, 255);
	transform: scale(1.3);
}

.td-img img {
	width: 25px;
	height: 25px;
}

.td-img {
	width: 25px;
	background-color: rgb(243, 249, 255);
	text-align: center;
}

.before-btn{
	height: 23px;
	width: 80px;
	margin-left: 8px;
	border: 0;
	background-color: rgb(124, 190, 255);
	border-radius: 10px;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: rgb(0, 17, 61);
	transition: 0.6s;
	margin-left: 45%;
	margin-top: 25px;
}

.before-btn:hover {
	background-color: rgb(0, 17, 61);
	color: rgb(203, 229, 255);
	transform: scale(1.3);
}

</style>
