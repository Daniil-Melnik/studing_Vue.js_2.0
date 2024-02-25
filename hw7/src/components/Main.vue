<template>
    <div>
        <div v-if="showCartLink">
            <button @click="onOrder">Карта</button>
            <button @click="onProduct">Продукт</button>
            <button @click="onProductList">Каталог</button>
        </div>
        
    
        <div class="col col-sm-9">
          <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
              <component :is="Component || 'div'" />
            </transition>
          </router-view>
        </div>
      </div>
</template>

<script>
    
    export default {
        name: "ShopMain",
        data(){
            return{
                showCartLink: true
            }
        },
        methods: {
            onOrder(){
				this.$router.push('/Cart');
			},
            onProduct(){
				this.$router.push('/Product');
			},
            onProductList(){
				this.$router.push('/ProductList');
			}
        },
        created() {
        this.$router.afterEach((to) => {
        if (to.name === 'Cart' | to.name === 'Product' | to.name === "ProductList") {
            this.showCartLink = false;
        } else {
            this.showCartLink = true;
        }
        });
        }
    }
</script>

<style>

</style>