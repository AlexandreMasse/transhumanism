<template>
  <div id="about">
    <h1>About</h1>
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati quisquam debitis id animi nisi dolor et ex maxime modi magnam aliquam rem atque pariatur, cupiditate eius voluptates ducimus ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati quisquam debitis id animi nisi dolor et ex maxime modi magnam aliquam rem atque pariatur, cupiditate eius voluptates ducimus ratione.</p>
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati quisquam debitis id animi nisi dolor et ex maxime modi magnam aliquam rem atque pariatur, cupiditate eius voluptates ducimus ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati quisquam debitis id animi nisi dolor et ex maxime modi magnam aliquam rem atque pariatur, cupiditate eius voluptates ducimus ratione.</p>
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati quisquam debitis id animi nisi dolor et ex maxime modi magnam aliquam rem atque pariatur, cupiditate eius voluptates ducimus ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati quisquam debitis id animi nisi dolor et ex maxime modi magnam aliquam rem atque pariatur, cupiditate eius voluptates ducimus ratione.</p>

    <div class="credit-container">
      <div class="school">
        <img src="../../assets/images/gobelins_logo.png" alt="">
        <p>Gobelins l’école de l’image</p>
        <p>BDDI 2018</p>
      </div>
      <div class="students">
        <p>Develop by <a href="#">Alexandre Masse</a> & <a href="#">Audren Mauplot</a> - Design by <a href="#">Justine Lenouvel</a> & <a href="#">Cassandre Leguay</a></p>
      </div>
    </div>
    <img src="../../assets/images/bioshock.png" alt="" class="bioshock">
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
#about {
padding-top: 80px;
padding-left: 40px;

  h1 {
    font-size: 26px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 30px;
  }

  p.text {
    font-size: 16px;
    max-width: 600px;
    text-align: left;
  }

  .credit-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
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

  img.bioshock {
    z-index: -1;
    position: fixed;
    top: 50vh;
    right: 0;
    height: 75vh;
    transform: translateY(-55%) translateX(50%);
    opacity: 0.25;
    pointer-events: none;

  }
}

</style>
