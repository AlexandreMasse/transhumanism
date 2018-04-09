<template>
  <div id="home">

    <home-side-progression :step="step" @changeStep="changeStep"></home-side-progression>

    <transition name="small-logo" mode="out-in">
      <div v-if="step > 1" class="logo-small" key="logo">
        <img src="../../assets/images/bioshock.png" alt="">
        <h2>Transhumanism</h2>
      </div>
    </transition>

    <transition name="section" mode="out-in">

      <!--SECTION INTRO -->
      <div v-if="step === 1" class="section intro" key="1">
        <img src="../../assets/images/bioshock.png" alt="">
        <h1>Transhumanism</h1>
        <p>the belief or theory that the human race can evolve beyond its current physical and mental limitations, especially by means of science and technology.</p>

        <div id="discover-protagonists">
          <img src="../../assets/images/protagonist1.png" alt="">
          <div @click="changeStep(2)">
            <p>Discover protagonists</p>
            <div class="line"></div>
          </div>
          <img src="../../assets/images/protagonist2.png" alt="">
        </div>
      </div>

      <!--SECTION PROTAGONIST BL -->
      <div v-if="step === 2" id="protagonist-bl" class="section protagonist" key="2">
        <div class="main">
          <div class="text">
            <h3>B.L.</h3>
            <p>Scientist biologist<br>
              Against transhumanism<br>
              34 years old<br>
              Married, 2 children<br>
              Interested about technological progress and innovation<br>
              Is worried about the future of her children<br>
              Wary about new technologies and their consequences</p>
            </div>
          <img src="../../assets/images/protagonist1.png" alt="">
        </div>
      </div>

      <!--SECTION PROTAGONIST NA -->
      <div v-if="step === 3" id="protagonist-na" class="section protagonist" key="3">
        <div class="main">
          <img src="../../assets/images/protagonist2.png" alt="">
          <div class="text">
            <h3>N.A.</h3>
            <p>Writer <br>
              For transhumanism<br>
              45 years old<br>
              Young father<br>
              Interested about technological progress and innovation<br>
              Afraid of death<br>
              Fascinated about new technologies that allow us to live longer</p>
            </div>
        </div>
      </div>

      <!--SECTION DISCOVER PROTAGONISTS -->
      <div v-if="step === 4" id="protagonists" class="section protagonist" key="4">
        <div class="main">
          <img src="../../assets/images/protagonist3.png" alt="">
          <div class="text">
            <p>N.A. and B.L. met a few years ago because of the friendship of their wifes.</p>
            <p>On April 10th 2018, while having a drink, they come up talking about transhumanism.</p>
          </div>
        </div>
        <router-link :to="{ name: 'dialogue'}">Discover dialogue</router-link>
      </div>

    </transition>
  </div>
</template>

<script>
import HomeSideProgression from './HomeSideProgression'

export default {
  name: 'Home',
  components: {HomeSideProgression},
  data () {
    return {
      step: 1
    }
  },
  methods: {
    throttle (delay, fn) {
      let lastCall = 0
      return function (...args) {
        const now = (new Date()).getTime()
        if (now - lastCall < delay) {
          return
        }
        lastCall = now
        return fn(...args)
      }
    },
    changeStep (nextStep) {
      if (nextStep >= 1 && nextStep <= 4) {
        this.step = nextStep
      }
    },
    onMouseWheel (e) {
      if (e.movementY < 0) {
        this.changeStep(this.step + 1)
      } else {
        this.changeStep(this.step - 1)
      }
    }
  },
  mounted () {
    window.addEventListener('mousewheel', this.throttle(400, this.onMouseWheel))
  }
}
</script>

<style scoped lang="scss">

.section-enter-active {
  transition: all 0.5s ease-in;
}

.small-logo-enter-active {
  transition: all 0.5s 0.3s ease-in;
}

.section-leave-active,
.small-logo-leave-active {
  transition: all 0.3s ease-out;
}

.section-enter,
.section-leave-to,
.small-logo-enter,
.small-logo-leave-to {
  opacity: 0;
}

#home {
  .section {
    height: 100vh;
  }

  .logo-small {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2vh;
    img {
      width: 100px;
    }
    h2 {
      font-size:14px;
      font-weight:400;
    }
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
    .main {
      position: absolute;
      top:50vh;
      transform: translateY(-50%);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      img, .text {
        width: 45%;
      }
      img {
        animation: img-enter 1.1s 0.3s ease forwards;
        opacity: 0;
        @keyframes img-enter {
          0% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0);
            opacity:1;
          }
        }
      }
      .text {
        line-height: 2em;
        animation: text-enter 1.1s 0.3s ease forwards;
        opacity: 0;

        @keyframes text-enter {
          0% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
  #protagonist-bl {
    .text {
      text-align: left;
      font-family: 'Baskerville', sans-serif;

      h3 {
        color: #64A0F9;
        font-size: 42px;
        font-weight: 400;
      }
    }
  }
  #protagonist-na {
    .text {
      text-align: right;
      font-family: 'Roboto', sans-serif;
      h3 {
        color: #F9C2BF;
        font-size: 42px;
        font-weight: 400;
      }
    }
  }
  #protagonists {
    .text {
      text-align: left;
    }

    a {
      position: absolute;
      bottom: 10vh;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
