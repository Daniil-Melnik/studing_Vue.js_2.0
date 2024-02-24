<template>
	<div>
		CART!!!
		<button @click="goBack">Назад</button>
	</div>
</template>

<script>
export default {
	name: "ShopCart",
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
}
</script>
