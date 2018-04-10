<template>
  <div id="dialogue-side-progression">

    <p class="year-title">
      {{ currentYear }}
    </p>
    <div v-for="(year, index) in dialogue" :key="index">
      <div v-for="(month, index) in year.months" :key="index">
        <div class="line"></div>
        <!--<div class="line before"></div>-->
        <!--<div class="line active"></div>-->
        <!--<div class="month active">-->
          <!--{{ month.monthName }}-->
        <!--</div>-->
        <!--<div class="line after"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogueSideProgression',
  props: ['dialogue', 'currentYear', 'currentMonth'],
  data () {
    return {
    }
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
    right: 0;
    cursor: pointer;

    .line {
      content: '';
      background: #4D4D4D;
      height: 3px;
      width: 20px;
      margin: 2vh 0;

      &:hover {
        background: white;
      }
    }
    .before, .after {
      width: 30px;
    }

    .active {
      width: 40px;
      background: white;
    }
  }
</style>
