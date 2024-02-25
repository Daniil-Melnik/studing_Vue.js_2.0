<template>
    <div>
        <div  v-if="showCartLink">
        <h1>Магазин товаров</h1>
        <div class="main-container">
            <router-link :to = "{ name: 'Cart'}" class="qq1"><div class="qq"><p>Корзина</p></div></router-link>         
            <router-link :to = "{ name:'ProductList'}" class="qq1"><div class="qq"><p>Каталог</p></div></router-link>            
            <router-link :to = "{ name:'Checkout'}" class="qq1"><div class="qq"><p>Оформление</p></div></router-link>
        </div>
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
			},
            onCheckOut(){
				this.$router.push('/Checkout');
			}
        },
        created() {
        this.$router.afterEach((to) => {
        if (to.name === 'Cart' | to.name === 'Product' | to.name === "ProductList" | to.name === "Checkout") {
            this.showCartLink = false;
        } else {
            this.showCartLink = true;
        }
        });
        }
    }
</script>

<style>

h1 {
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(0, 41, 145);
    font-size: 3em;
}

.main-container {
    display:  flex;
    justify-content: center;
    align-items: center;
    height: 600px;
}

.qq1 {
    text-decoration: none;
    color: rgb(239, 247, 255);
}

.qq {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 17, 61);
    margin-left: 20px;
    border-radius: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    color: rgb(239, 247, 255);
    transition: 0.6s;
}

.qq p {
    text-align: center;
}

.qq:hover {
    background-color: rgb(239, 247, 255);
    color: rgb(0, 17, 61);
    transform: scale(1.5);
}

</style>