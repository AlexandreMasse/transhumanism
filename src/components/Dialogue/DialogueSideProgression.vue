<template>
  <div id="dialogue-side-progression">

    <div class="step-container">
      <p class="year">{{ year }}</p>
      <p class="month">{{ month }}</p>
      <div v-for="(step, index) in nbStep" class="step" :key="index" @click="onStepClick(index + 1)">
        <div class="line"></div>
      </div>
    </div>

    <!--
    :class="{
      'max': currentStep === (index + 1),
      'middle': ( currentStep === (index + 2) || currentStep === index ),
      }"
    -->
    <!--<div v-for="(year, index) in dialogue" :key="index">
      <div v-for="(month, index) in year.months" :key="index">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        &lt;!&ndash;<div class="line before"></div>&ndash;&gt;
        &lt;!&ndash;<div class="line active"></div>&ndash;&gt;
        &lt;!&ndash;<div class="month active">&ndash;&gt;
          &lt;!&ndash;{{ month.monthName }}&ndash;&gt;
        &lt;!&ndash;</div>&ndash;&gt;
        &lt;!&ndash;<div class="line after"></div>&ndash;&gt;
      </div>
    </div>-->
  </div>
</template>

<script>
import { TweenLite, Power1 } from 'gsap'

export default {
  name: 'DialogueSideProgression',
  props: ['dialogue', 'year', 'month'],
  data () {
    return {
      currentStep: 0,
      nbStep: 30
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
      if (nextStep > 0 && nextStep <= this.nbStep && this.currentStep !== nextStep) {
        this.currentStep = nextStep

        this.stepsElements.forEach((el, index) => {
          // el.classList.remove('middle')
          // el.classList.remove('max')
          // el.style.width = '20px'
          el.childNodes[0].style.width = '20px'
          el.childNodes[0].style.opacity = null

          if ((index + 1) === nextStep) {
            // el.classList.add('max')
            // el.style.width = '40px'
            el.childNodes[0].style.width = '40px'
            el.childNodes[0].style.opacity = '1'

            TweenLite.to(this.monthElement, 0.4, {
              top: el.offsetTop,
              ease: Power1.easeOut
            })
          }

          if (nextStep === (index + 2) || nextStep === index) {
            // el.classList.add('middle')
            // el.style.width = '30px'
            el.childNodes[0].style.width = '30px'
            el.childNodes[0].style.opacity = '0.6'
          }
        })

        // const stepEl = this.stepsElements[nextStep-1]
        /* stepEl.previousSibling.classList.remove('max')
        stepEl.previousSibling.classList.add('middle')
        stepEl.classList.remove('middle')
        stepEl.classList.add('max')
        stepEl.nextSibling.classList.remove('max')
        stepEl.nextSibling.classList.add('middle') */
      }
    },
    onStepClick (nextStep) {
      const stepRatio = (nextStep - 1) / (this.nbStep - 1)
      const scrollPosition = (document.body.scrollHeight - window.innerHeight) * stepRatio
      this.$emit('scrollToPosition', scrollPosition, 2.5, 0)
    },
    onScroll () {
      const scrollYPourcent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      const nextStep = Math.round(scrollYPourcent * this.nbStep + 0.5)
      this.changeStep(nextStep)
    },
    onPageEnter () {
      this.changeStep(1)
      // window.addEventListener('scroll', this.throttle(100, this.onScroll))
    },
    onPageLeave () {
      // window.removeEventListener('scroll', this.throttle(100, this.onScroll))
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'dialogue') {
        this.onPageEnter()
      } else if (from.name === 'dialogue') {
        this.onPageLeave()
      }
    }
  },

  mounted () {
    this.stepsElements = this.$el.querySelectorAll('.step')
    this.monthElement = this.$el.querySelector('.month')
    // this.dialogueContainer = document.querySelector('.dialogue-container')
    // const dialogueHeight = th
    // console.dir(dialogue.clientHeight)

    window.addEventListener('scroll', this.throttle(100, this.onScroll))

    this.changeStep(1)
  }
}
</script>

<style scoped lang="scss">
  #dialogue-side-progression {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    right: 100px;
    cursor: pointer;

    .step-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 500px;

      .month, .year {
        position: absolute;
        left: 45px;
        margin: 0;
      }
      .year {
        font-size: 20px;
        top: -30px;
      }

      .step {
        position: relative;
        width: 30px;
        flex: 1;

        .line {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          background-color: white;
          height: 3px;
          width: 20px;
          opacity: 0.2;
          transition: all 0.5s ease;
        }

        &:hover {
          .line {
            opacity: 0.8;
          }
        }

        /*
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          background-color: white;
          height: 3px;
          width: 20px;
          transition: width 0.5s ease;
        }

        &.max:before {
          width: 40px;
        }
        &.middle:before {
          width: 30px;
        }
        */

        /* &:hover {
           &:before {
             width: 40px;
             transition: width 0.5s ease;
           }
           +:before {
             width: 30px;
             transition: width 0.5s ease;
           }
         }*/
      }
    }

  }
</style>
