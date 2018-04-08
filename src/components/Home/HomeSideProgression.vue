<template>
  <div id="home-side-progression">
   <!--  <button @click="moins">Moins</button>
    <button @click="plus">Plus</button> -->
    <div class="step-container">
      <div class="background-line"></div>
      <div class="step-line"></div>
      <div :class="currentStep >= 1 ? 'actif' : 'inactif'" class="step-dot" @click="changeStep(1)"></div>
      <div :class="currentStep >= 2 ? 'actif' : 'inactif'" class="step-dot" @click="changeStep(2)"></div>
      <div :class="currentStep >= 3 ? 'actif' : 'inactif'" class="step-dot" @click="changeStep(3)"></div>
      <div :class="currentStep >= 4 ? 'actif' : 'inactif'" class="step-dot" @click="changeStep(4)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSideProgression',
  props: ['step'],
  data () {
    return {
      currentStep: this.step,
      nbStep: 4
    }
  },
  methods: {
    changeStep (nextStep) {
      if (nextStep >= 1 && nextStep <= this.nbStep) {
        this.currentStep = nextStep
        this.stepLine.style.height = (nextStep - 1) * this.stepContainer.offsetHeight / (this.nbStep - 1) + 'px'
        // Emit event for parent
        this.$emit('changeStep', nextStep)
      }
    },
    plus () {
      this.changeStep(this.currentStep + 1)
    },
    moins () {
      this.changeStep(this.currentStep - 1)
    }
  },
  mounted () {
    this.stepLine = document.querySelector('.step-line')
    this.stepContainer = document.querySelector('.step-container')
    this.changeStep(this.currentStep)
  },
  watch: {
    'step' (to, from) {
      this.changeStep(to)
    }
  }
}
</script>

<style scoped lang="scss">
#home-side-progression {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50vh;
  right: 50px;
  transform: translateY(-50%);

  button {
    margin-bottom: 20px;
  }

  .step-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;

    .step-line {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      transition: height 0.5s;
      background-color: white;
    }

    .background-line {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 99.5%;
      background-color: #757575;
    }

    .step-dot {
      z-index: 10;
      width: 10px;
      height: 10px;
      cursor: pointer;
      border-radius: 50%;
      transition: all 0.5s;
      &.actif {
        background-color:white;
        border: white solid 1px;
      }
      &.inactif {
        background-color:black;
        border: #757575 solid 1px;
      }
    }

  }

}
</style>
