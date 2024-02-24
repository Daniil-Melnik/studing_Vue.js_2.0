<template>
	<div>
		<h1>Название товара</h1>
		<router-link :to="{name: 'products'}">Back to products</router-link>
		<hr>
		<div class="alert alert-success">
			Цена товара
		</div>
		hw: add to cart
	</div>
</template>

<script>
	export default {
		computed: {
		}
	}
</script>