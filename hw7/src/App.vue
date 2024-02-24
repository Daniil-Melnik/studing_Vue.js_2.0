<template>
  <!-- <div>
    <router-link v-if="showCartLink" :to="{ name: 'Cart' }">
      <a>Карта</a>
    </router-link>

    <div class="col col-sm-9">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component || 'div'" />
        </transition>
      </router-view>
    </div>
  </div> -->
  <Main></Main>
</template>

<script>
import Main from './components/Main.vue'
export default {
  name: 'App',
  data() {
    return {
      //showCartLink: true,
    };
  },
  /*created() {
    this.$router.afterEach((to) => {
      if (to.name === 'Cart') {
        this.showCartLink = false;
      } else {
        this.showCartLink = true;
      }
    });
  },*/
  components: {
    Main
  }
};
</script>

<style>
.slide-enter {
}

.slide-enter-active {
  animation: slideIn 0.5s;
}

.slide-enter-to {
}

.slide-leave {
}

.slide-leave-active {
  animation: slideOut 0.5s;
}

.slide-leave-to {
}

@keyframes slideIn {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

@keyframes slideOut {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>
