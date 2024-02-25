<template>
	<div>
		<h1>Оформление</h1>
		<hr>
		<table>
			<tr>
				<th>№</th>
				<th>Название</th>
				<th>Цена</th>
			</tr>
			<tr v-for="c, i in cart" :key="c.id">
				<td>{{ i + 1 }}</td>
				<td>{{ c.name }}</td>
				<td>{{ c.price }}</td>
			</tr>
			<tr>
				<td colspan="2">Итого:</td>
				<td>{{ summ }}</td>
			</tr>
		</table>
		<hr>
		<h2>Данные:</h2>
		<Form></Form>
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
		},

		components: {
			Form
		}
	}
</script>