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
  components: {Navigation}
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Inconsolata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 80px;
  text-align: center;

}
</style>
