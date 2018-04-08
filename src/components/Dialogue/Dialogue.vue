<template>
  <div id="dialogue">
    <div class="gradient-top"></div>

    <dialogue-side-progression :dialogue="dialogue"></dialogue-side-progression>

    <div class="dialogue-container">
      <div class="narration-intro">
        <p>The two protagonists are having drink and come up talking about transhumanism.</p>

        <p>N.A., the pro-transhumanism one has a newspaper and show his friend an article he just read about transhumanism.</p>

        <p>The article deals with //</p>
      </div>
        <div v-for="(year, index) in dialogue" :key="index">
          <div v-for="(month, index) in year.months" :key="index">
              <div v-for="(word, index) in month.words" :key="index">
              <div v-if="word.type === 'NA'" class="dialogue-block na-talking">
                <div class="dialogue-name">N.A.</div>
                <div class="dialogue-content">
                  <p v-if="word.article_included">
                    {{ word.content_before }} <a :href="word.link" target="_blank">{{ word.content_link }}</a> {{ word.content_after }}
                  </p>
                  <p v-else>{{ word.content }}</p>
                </div>
              </div>

              <div v-if="word.type === 'BL'" class="dialogue-block bl-talking">
                <div class="dialogue-name">B.L.</div>
                <div class="dialogue-content">
                  <p v-if="word.article_included">
                    {{ word.content_before }} <a :href="word.link" target="_blank">{{ word.content_link }}</a> {{ word.content_after }}
                  </p>
                  <p v-else>{{ word.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import dialogue from '../../data/dialogue.json'
import DialogueSideProgression from './DialogueSideProgression'

export default {
  name: 'Dialogue',
  components: {DialogueSideProgression},
  data () {
    return {
      title: 'Dialogue',
      dialogue
    }
  }
}
</script>

<style scoped lang="scss">
#dialogue {
  padding-top: 40px;
  position: relative;
  h1 {
    font-size: 26px;
    font-weight: 400;
  }
  .gradient-top {
    z-index: 5;
    position: fixed;
    width: 80vw;
    height: 22vh;
    top: 0;
    background: -moz-linear-gradient(top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.99) 1%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0b0b0b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }

  .narration-intro {
    text-align: center;
    margin-bottom: 10vh;
    padding-top: 10vh;
  }

  .dialogue-block {
    width: 75%;
    display: flex;
    margin-bottom: 10vh;

    p {
      margin: 0;
      font-size: 20px;
      line-height: 4vh;

      &::first-letter {
        padding-left: 35px;
      }

      &:before {
        content: '';
        background: white;
        height: 2px;
        width: 30px;
        position: absolute;
        margin-top: 2vh;
      }
    }
    .dialogue-name {
      font-size: 25px;
      padding: 0 2vw;
    }
  }

  .na-talking {
    margin-left: auto;
    flex-direction: row-reverse;
    text-align: right;
    font-family: 'Roboto', sans-serif;

    .dialogue-name {
      color: #F9C2BF;
    }
  }
    .bl-talking {
      margin-right: auto;
      text-align: left;
      font-family: 'Baskerville', sans-serif;

      .dialogue-name {
        color: #64A0F9;
      }
    }
}
</style>
