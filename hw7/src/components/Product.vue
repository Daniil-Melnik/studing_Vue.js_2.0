<template>
	<div>
		PRODUCT!
		<button @click="goBack">Назад</button>
	</div>
</template>

<script>
	export default {
		name: "ShopProduct",
		computed: {
		},
		methods: {
			goBack() {
			this.$router.go(-1);
		}
		},
	}
</script>