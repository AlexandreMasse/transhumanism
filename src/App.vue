<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <a href="https://www.gobelins.fr/" class="gobelins-logo">
      <img src="@/assets/images/gobelins_logo.png" alt="">
    </a>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {Navigation},
  methods: {
    // checkNavigationRoute (routeName) {
    //   // return this.$route.path === this.$router.match(routeName).fullPath
    // }
  },
  mounted () {
    // console.log(this.checkNavigationRoute('about'))
  },
  updated () {
    // console.log(this.checkNavigationRoute('about'))
  }
}
</script>

<style scoped lang="scss">

.fade-enter-active {
  transition: opacity 0.3s ease-in;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Inconsolata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;

  > div {
    position: relative;
    z-index: 2;
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
    height: 100%;
  }

  a.gobelins-logo {
    position: fixed;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    img {
      height: 40px;
      filter: grayscale(100%)
    }
  }

}
</style>
