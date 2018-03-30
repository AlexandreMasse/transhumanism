<template>
  <div id="home">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  font-size: 20px;
}
</style>
