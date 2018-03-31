<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
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
#app {
  font-family: 'Inconsolata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

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
