<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4" 
			     v-for="т in 2">
				<a><h3>Название товара</h3></a>
				<div>Цена товара</div>
				<button v-if="true"
						@click=""
						class="btn btn-primary"
						>
					Add to cart
				</button>
				<button v-else
						@click=""
						class="btn btn-warning"
				>
					Remove to cart
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
		},
		computed: {
		},
		methods: {
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>