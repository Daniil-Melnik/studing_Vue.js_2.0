<template>
	<div>
		<button @click="goBack">Назад</button>
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
		}
	}
}
</script>
