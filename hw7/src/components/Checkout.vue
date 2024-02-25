<template>
	<div>
		<h1>Оформление</h1>
		<Form></Form>
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
				</tr>
				<tr>
					<td colspan="2"></td>
					<td>Итого</td>
					<td>{{ summ }}</td>
				</tr>
			</table>
			</div>
			<p><button class="before-btn"  @click="goBack">Назад</button></p>
		
	</div>
</template>

<script>

	import Form from "./Form.vue"

	export default {
		name: "ShopCheckOut",
		data() {
			return{
				cart: null,
				summ: 25,
				userData : {name : "", cardnum : "", email: ""}
			}
		},

		beforeMount() {
			this.cart = this.$store.state.cart
			let a = 0
			for (let p = 0; p < this.cart.length; p++){
				a += this.cart[p].price
			}
			this.summ = a
		},

		methods: {
			receiveData(ist, s, str){ // ~ this.indtxt , this.isContact, this.text from $emit from sendPack
					this.isContact[ist] = s // changing main isContact array
					this.userData[ist] = str // changing main userData
					this.$store.commit('updUser', this.userData);
				},
			goBack() {
                this.$router.go(-1);
            },
		},

		components: {
			Form
		}
	}
</script>

<style>
</style>