<template>
  <div id="sources">
    <h1>Sources</h1>

    <div class="sources-container">
      <div class="month" v-for="(month, index) in sourcesByMonth" :key="index">
        <p class="month-title">{{month.monthName}}</p>
        <div class="sources">
          <div class="source" v-for="(source, index) in month.sources" :key="index">
            <p class="date">{{source.date}}</p>
            <p class="title"><a :href="source.link">{{source.title}}</a></p>
            <p class="author">Par {{source.author}} dans <span>{{source.media}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/bioshock.png" alt="" class="bioshock">
  </div>
</template>

<script>
import sourcesByMonth from '@/data/sources.json'
export default {
  name: 'Sources',
  data () {
    return {
      sourcesByMonth
    }
  }
}
</script>

<style scoped lang="scss">
#sources {
  padding-top: 30px;

  h1 {
    font-size: 26px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 40px;
  }

  .sources-container {
    text-align: left;
    .month {
      margin-bottom: 40px;

      p.month-title {
        width: 100%;
        font-size: 58px;
        margin: 0 0 40px 0;
      }

      .sources {
        display: flex;
        flex-wrap: wrap;

        .source {
          width: 45%;
          max-width: 400px;
          margin-bottom: 40px;

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
    height: 650px;
    transform: translateY(-55%) translateX(50%);
    opacity: 0.25;
    pointer-events: none;

  }
}

</style>
