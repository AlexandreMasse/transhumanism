<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
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

}
</style>
