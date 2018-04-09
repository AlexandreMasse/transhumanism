<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <keep-alive>
         <router-view/>
      </keep-alive>
    </transition>
    <a href="https://www.gobelins.fr/" class="gobelins-logo">
      <img src="./assets/images/gobelins_logo.png" alt="">
    </a>

  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {Navigation},
  methods: {
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
    max-width: 1400px;
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
