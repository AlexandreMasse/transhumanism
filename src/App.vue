<template>
  <div id="app">
    <nav id="nav">
      <router-link to="home">Home</router-link>
      <router-link to="about">About</router-link>
      <router-link to="subjects">Subject</router-link>
      <router-link to="sources">Sources</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
