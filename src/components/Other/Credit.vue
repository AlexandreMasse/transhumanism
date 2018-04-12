<template>
  <div class="credit-container">
    <div class="school">
      <img src="../../assets/images/gobelins_logo.png" alt="">
      <p>Gobelins l’école de l’image</p>
      <p>BDDI 2018</p>
    </div>
    <div class="students">
      <p>Develop by <a href="https://alexandremasse.fr/" target="_blank">Alexandre Masse</a> & <a href="https://www.linkedin.com/in/audren-mauplot-88984012a/" target="_blank">Audren Mauplot</a> - Design by <a href="http://justine-lenouvel.fr/" target="_blank">Justine Lenouvel</a> & <a href="http://cargocollective.com/cassandrely/" target="_blank">Cassandre Leguay</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Credit'
}
</script>

<style scoped lang="scss">

  .credit-container {
    margin: 0 auto;
    width: auto;
    .school {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
      img {
        filter: grayscale(100%);
        height: 35px;
        margin-bottom: 8px;
      }
      p {
        color: #535353;
        font-size: 12px;
        margin: 3px 0;
        font-family: 'Roboto', sans-serif;
      }
    }
    .students {
      margin-bottom: 40px;
      p {
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        color: #535353;
      }

      a {
        color: inherit;
      }
    }
  }
</style>
