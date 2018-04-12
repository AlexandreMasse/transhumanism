<template>
  <div id="home">

    <home-side-progression :step="step" @changeStep="changeStep"/>

    <div :class="{'logo-big' : step === 1, 'logo-small': step > 1 }" class="logo">
      <img src="../../assets/images/bioshock.png" alt="">
      <h1>Transhumanism</h1>
    </div>

    <!-- <transition name="small-logo" mode="out-in">
      <div v-if="step > 1" :class="{'logo-big' : step === 1, 'logo-small': step > 1 }" key="logo">
        <img src="../../assets/images/bioshock.png" alt="">
        <h2>Transhumanism</h2>
      </div>
    </transition> -->

    <transition name="section" mode="out-in">

      <!--SECTION INTRO -->
      <div v-if="step === 1" id="intro" class="section" key="1">
        <!--<img src="../../assets/images/bioshock.png" alt="">
        <h1>Transhumanism</h1>-->
        <p>Transhumanism is an intellectual, cultural and scientific movement to improve human’s
          physical and mental characteristics through technology.
          With actual technological achievements, this subject first considered as an utopia is becoming more and more
          real and raises legitimate questions.</p>
        <div id="discover-protagonists">
          <img src="../../assets/images/protagonist1.svg" alt="">
          <div @click="changeStep(2)">
            <p>Discover protagonists</p>
            <div class="line"></div>
          </div>
          <img src="../../assets/images/protagonist2.svg" alt="">
        </div>
      </div>

      <!--SECTION PROTAGONIST BL -->
      <div v-if="step === 2" id="protagonist-bl" class="section protagonist" key="2">
        <div class="main">
          <div class="text">
            <h3>B.L.</h3>
            <p>B.L. is a 34 biological scientist. He is married, has two children and lives in the 15th arrondissement of Paris. He is quite interested about technological progress and innovation even if he is not really confident about it. He is worried about the future of his children especially because of transhumanism.
            </p>
            </div>
          <img src="../../assets/images/protagonist1.svg" alt="">
        </div>
      </div>

      <!--SECTION PROTAGONIST NA -->
      <div v-if="step === 3" id="protagonist-na" class="section protagonist" key="3">
        <div class="main">
          <img src="../../assets/images/protagonist2.svg" alt="">
          <div class="text">
            <h3>N.A.</h3>
            <p>N.A. is a young dad of 31 years old and parisian writer. Afraid of death, he is very interested about technological and scientific progress that allow us to live longer.
            </p>
          </div>
        </div>
      </div>

      <!--SECTION DISCOVER PROTAGONISTS -->
      <div v-if="step === 4" id="protagonists" class="section protagonist" key="4">
        <div class="main">
          <img src="../../assets/images/protagonist3.svg" alt="">
          <div class="text">
            <p>N.A. and B.L. met a few years ago thanks to the friendship of their wifes.</p>
            <p>On April 12th 2018, while having a drink, they come up talking about transhumanism.</p>
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
        if (now - lastCall < delay) return
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
      if (e.deltaY > 0) {
        this.changeStep(this.step + 1)
      } else {
        this.changeStep(this.step - 1)
      }
    },
    onPageEnter () {
      window.addEventListener('wheel', this.throttleHandler)
    },
    onPageLeave () {
      window.removeEventListener('wheel', this.throttleHandler)
    }
  },
  mounted () {
    this.throttleHandler = this.throttle(1800, this.onMouseWheel)
    window.addEventListener('wheel', this.throttleHandler)
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'home') {
        this.onPageEnter()
      } else if (from.name === 'home') {
        this.onPageLeave()
      }
    }
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

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 1.2s ease;

    h1 {
      margin: 0;
    }
    > * {
      transition: all 1.2s ease;
    }

    &.logo-big {
      top: 6.5vh;
      img {
        height: 23vh;
      }
      h1 {
        font-size: 48px;
        font-weight: 400;
        margin-top: 1vh;
      }
    }

    &.logo-small {
      top: 3vh;
      img {
        height: 8vh;
      }
      h1 {
        font-size:16px;
        font-weight:400;
      }
    }
  }

  #intro {
    position: relative;
    padding-top: 44vh;

    /*> img {
      height: 25vh;
      margin-bottom: 30px;
    }

    h1 {
      font-size: 48px;
      font-weight: 400;
    }*/

    p {
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      width: 80%;
      max-width: 700px;
      margin: 0 auto;
    }

    #discover-protagonists {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      img {
        height: 25vh;
      }

      div {
        cursor: pointer;
        .line {
          position: relative;
          height: 60px;
          margin: 20px auto 0 auto;

          &:before {
            position: absolute;
            content: '';
            background-color: white;
            width: 1px;
            height: 0;
            animation: line 2.5s ease-in-out infinite;

            @keyframes line {
              0% {
                top: 0;
                bottom: unset;
                height: 0;
              }
              50% {
                top:0;
                height: 100%;
              }
              51% {
                top: unset;
                bottom: 0;
              }
              100% {
                height: 0;
                bottom: 0;
              }
            }
          }
        }
      }
    }
  }
  .section {
    height: 100vh;
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
        max-height: 55vh;
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

        h3 {
          margin-top: 0;
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
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 12vh;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid white;
      text-decoration: none;
      padding: 20px 60px;
      transition: all 0.7s ease-out;
      opacity: 0;
      font-size: 20px;
      animation: link 1.5s 1s ease forwards;

      &:hover {
        transition: all 0.7s ease-out;
        background-color: white;
        color: black;
      }

      @keyframes link {
        from {opacity: 0}
        to {opacity: 1}
      }
    }
  }
}
</style>
