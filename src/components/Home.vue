<template>
  <div id="home">
    <!--SECTION INTRO -->
    <div class="section intro">
      <img src="@/assets/images/bioshock.png" alt="">
      <h1>Transhumanism</h1>
      <p>the belief or theory that the human race can evolve beyond its current physical and mental limitations, especially by means of science and technology.</p>
      <home-side-progression></home-side-progression>

      <div id="discover-protagonists">
        <img src="@/assets/images/protagonist1.png" alt="">
        <div @click="scrollDown()">
          <p>Discover protagonists</p>
          <div class="line"></div>
        </div>
        <img src="@/assets/images/protagonist2.png" alt="">
      </div>
    </div>

    <!--SECTION DISCOVER PROTAGONISTS -->
    <div class="section protagonist">
      <div class="logo">
        <img src="@/assets/images/bioshock.png" alt="">
        <h2>Transhumanism</h2>
      </div>
      <div class="main">
        <img src="@/assets/images/protagonist3.png" alt="">
        <span>N.A. and B.L. met a few years ago because of the friendship of their wifes. <br>
        On April 10th 2018, while having a drink, they come up talking about transhumanism.</span>
      </div>
    </div>

    <!--SECTION PROTAGONIST 1 -->
    <div id="protagonist-1" class="section protagonist">
      <div class="logo">
        <img src="@/assets/images/bioshock.png" alt="">
        <h2>Transhumanism</h2>
      </div>
      <div class="main">
        <span>
          <h3>B.L.</h3>
          <p>Scientist biologist <br>
            Against transhumanism <br>
            34 years old <br>
            Married, 2 children <br>
            Interested about technological progress and innovation <br>
            Is worried about the future of her children <br>
            Wary about new technologies and their consequences</p>
          </span>
        <img src="@/assets/images/protagonist1.png" alt="">
      </div>
    </div>

    <!--SECTION PROTAGONIST 2 -->
    <div id="protagonist-2" class="section protagonist">
      <div class="logo">
        <img src="@/assets/images/bioshock.png" alt="">
        <h2>Transhumanism</h2>
      </div>
      <div class="main">
        <img src="@/assets/images/protagonist2.png" alt="">
        <span>
          <h3>N.A.</h3>
          <p>Writer <br>
            For transhumanism <br>
            45 years old <br>
            Young father<br>
            Interested about technological progress and innovation <br>
            Afraid of death<br>
            Fascinated about new technologies that allow us to live longer</p>
          </span>
      </div>
    </div>
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
  },
  methods: {
    scrollDown: function () {
      console.log('ok')
    }
  }
}
</script>

<style scoped lang="scss">

#home {
  .section {
    height: 100vh;
  }
  .intro {
    padding-top: 70px;
    position: relative;

    > img {
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
    }
    #discover-protagonists {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;

      img {
        max-width: 100px;
        bottom: 0;
      }

      > div {
        cursor: pointer;

        .line {
          height: 60px;
          width: 1px;
          background: white;
          margin: 20px auto 0 auto;
        }
      }
    }
  }
  .protagonist {
    .logo {
      img {
        width: 100px;
      }
    }
    .main {
      margin-top: 10vh;
      img, span {
        display: inline-block;
        vertical-align: middle;
        max-width: 45%;
      }
      span {
        line-height: 2em;
      }
    }
  }
  #protagonist-1 {
    span {
      text-align: left;
      font-family: 'Baskerville', sans-serif;
    }
    h3 {
      color: #64A0F9;
    }
  }
  #protagonist-2 {
    span {
      text-align: right;
      font-family: 'Roboto', sans-serif;
    }
    h3 {
      color: #F9C2BF;
    }
  }
}
</style>
