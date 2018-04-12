<template>
  <div id="sources">
    <!--<h1>Sources</h1>-->
    <div class="sources-container">
      <div class="month" v-for="(month, index) in sourcesByMonth" :key="index">
        <p class="month-title">{{month.monthName}}</p>
        <div class="sources">
          <div class="source" v-for="(source, index) in month.sources" :key="index">
            <p class="date">{{source.date}}</p>
            <p class="title"><span>«</span>&nbsp;<a :href="source.link" target="_blank">{{source.title}}</a>&nbsp;<span>»</span></p>
            <p class="author">By {{source.author}} in <span>{{source.media}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <credit/>
    <img src="../../assets/images/bioshock.png" alt="" class="bioshock">
  </div>
</template>

<script>
import sourcesByMonth from '../../data/sources.json'
import Credit from '../Other/Credit.vue'
import { TweenLite, Power2 } from 'gsap'
require('gsap/ScrollToPlugin')

export default {
  name: 'Sources',
  components: {Credit},
  data () {
    return {
      sourcesByMonth
    }
  },
  methods: {
    scrollTop () {
      TweenLite.to(window, 0.5, {
        scrollTo: { y: 0 },
        ease: Power2.easeInOut,
        delay: 0
      })
    },
    onPageEnter () {
      this.scrollTop()
    }
  },
  mounted () {
    this.scrollTop()
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'sources') {
        this.onPageEnter()
      }
    }
  }
}
</script>

<style scoped lang="scss">
#sources {
  padding-top: 100px;

  h1 {
    font-size: 26px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 40px;
  }

  .sources-container {
    text-align: left;
    .month {
      margin-bottom: 80px;

      p.month-title {
        width: 100%;
        font-size: 58px;
        margin: 0 0 70px 0;
      }

      .sources {
        display: flex;
        flex-wrap: wrap;

        .source {
          width: 45%;
          max-width: 450px;
          margin-bottom: 45px;

          &:nth-child(2n+1) {
            margin-right: 10%;
          }

          &:nth-child(2n) {
            margin-right: 0;
          }

          .date {
            font-weight: 700;
            font-size: 16px;
            margin: 0;
          }

          .title {
            font-size: 20px;
            margin: 10px 0;
            span {
              font-size: 25px;
            }
          }

          .author {
            font-size: 16px;
            margin: 0;

            span {
              font-family: 'Roboto', sans-serif;
              font-style: italic;
            }
          }
        }
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
