<template>
  <div id="subjects">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Subjects',
  data () {
    return {
      title: 'Subjects'
    }
  }
}
</script>

<style scoped lang="scss">
#subjects {
  padding-top: 40px;
  h1 {
    font-size: 26px;
    font-weight: 400;
  }
}
</style>
