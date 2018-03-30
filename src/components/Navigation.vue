<template>
  <nav id="navigation">
    <router-link :to="{ name: 'home'}">Home</router-link>
    <router-link :to="{ name: 'about'}">About</router-link>
    <router-link :to="{ name: 'subjects'}">Subject</router-link>
    <router-link :to="{ name: 'sources'}">Sources</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#navigation {
  margin-bottom: 20px;
  a {
    margin: 0 10px;
    font-size: 20px;
    color: white;
    text-decoration: none;
  }
}
</style>
