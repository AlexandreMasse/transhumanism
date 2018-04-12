<template>
  <div id="app">
    <navigation/>
    <transition name="fade" mode="out-in">
      <keep-alive>
         <router-view/>
      </keep-alive>
    </transition>
    <a href="https://www.gobelins.fr/" target="_blank" class="gobelins-logo">
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

$mediaMobile: 500px !default;

.fade-enter-active {
  transition: opacity 0.7s ease-out;
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
    max-width: 1300px;
    width: 80%;
    margin: 0 auto;
    height: 100%;

    &#dialogue {
      width: 70%;
      @media screen and (max-width : $mediaMobile) {
        width: 75%;
      }
    }
  }

  a.gobelins-logo {
    position: fixed;
    bottom: 20px;
    left: 20px;
    cursor: pointer;

    @media screen and (max-width : $mediaMobile) {
      bottom: 15px;
      left: 15px;
    }

    img {
      height: 40px;
      filter: grayscale(100%)
    }
  }

}
</style>
