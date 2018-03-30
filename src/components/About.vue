<template>
  <div id="about">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  color: black;
}
</style>
