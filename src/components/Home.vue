<template>
  <div id="home">
    <img src="@/assets/images/bioshock.png" alt="">
    <h1>Transhumanism</h1>
    <p>Le transhumanisme peut se définir comme étant une façon de penser qui préconise l’utilisation des sciences et de la technologie.</p>
    <home-side-progression></home-side-progression>
  </div>
</template>

<script>
import HomeSideProgression from '@/components/HomeSideProgression'
export default {
  name: 'Home',
  components: {HomeSideProgression},
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped lang="scss">
#home {
  padding-top: 70px;

  img {
    width: 400px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 48px;
    font-weight: 400;
  }

  p {
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    width: 700px;
    color: #F8F8F8;
    margin: 0 auto;
    margin-bottom: 600px;
  }
}
</style>
