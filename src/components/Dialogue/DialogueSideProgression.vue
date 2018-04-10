<template>
  <div id="dialogue-side-progression">

    <p class="year-title">
      {{ year }}
    </p>
    <p class="month-title">
      {{ month }}
    </p>

    <div class="step-container">
      <div v-for="(step, index) in nbStep" class="step" :key="index" @click="changeStep(index + 1)"></div>
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
export default {
  name: 'DialogueSideProgression',
  props: ['dialogue', 'year', 'month'],
  data () {
    return {
      currentStep: 3,
      nbStep: 20
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

          el.style.width = '20px'

          if ((index + 1) === nextStep) {
            // el.classList.add('max')
          }el.style.width = '40px'

          if (nextStep === (index + 2) || nextStep === index) {
            // el.classList.add('middle')
            el.style.width = '30px'
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
    onMouseWheel () {
      // const scrollYPourcent = (window.scrollY + window.innerHeight) / this.dialogueContainer.clientHeight
      const scrollYPourcent = window.scrollY / (document.body.scrollHeight - window.innerHeight)

      const nextStep = Math.round(scrollYPourcent * this.nbStep)

      this.changeStep(nextStep)
    }
  },
  watch: {
    'month' (to, from) {
      console.log(to)
    }
  },
  mounted () {
    this.stepsElements = this.$el.querySelectorAll('.step')
    this.dialogueContainer = document.querySelector('.dialogue-container')
    // const dialogueHeight = th
    // console.dir(dialogue.clientHeight)

    window.addEventListener('mousewheel', this.onMouseWheel)

    /* stepsElements.forEach((step, index) => {
      step.addEventListener('mouseover', (e) => {

      })
    })*/
  }
}
</script>

<style scoped lang="scss">
  #dialogue-side-progression {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0vh;
    right: 40px;
    cursor: pointer;

    .year-title, .month-title {
      font-size: 20px;
    }

    .step {
      position: relative;
      height: 20px;
      width: 30px;
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
</style>
