<template>
  <div id="dialogue">
    <div class="gradient-top"></div>

    <dialogue-side-progression :dialogue="dialogue"/>
    <div class="dialogue-container">
      <div class="narration-intro">
        <p>The two protagonists are having drink and come up talking about transhumanism.</p>

        <p>N.A., the pro-transhumanism one has a newspaper and show his friend an article he just read about transhumanism.</p>

        <p>The article deals with //</p>
      </div>
        <div v-for="(year, index) in dialogue" :key="index">
          <div v-for="(month, index) in year.months" :key="index">
              <div v-for="(word, index) in month.words" :key="index">

              <div v-if="word.type === 'NA'" class="dialogue-block na-talking" :data-month="month.monthName">
                <div class="dialogue-name">N.A.</div>
                <div class="dialogue-content">
                  <p v-if="word.article_included">
                    {{ word.content_before }} <a :href="word.link" target="_blank">{{ word.content_link }}</a> {{ word.content_after }}
                  </p>
                  <p v-else>{{ word.content }}</p>
                </div>
              </div>

              <div v-if="word.type === 'BL'" class="dialogue-block bl-talking" :data-month="month.monthName">
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
import { TweenMax, Power1 } from 'gsap'
// import ScrollToPlugin from 'gsap/ScrollToPlugin'
require('gsap/ScrollToPlugin')

export default {
  components: {DialogueSideProgression},
  data () {
    return {
      title: 'Dialogue',
      dialogue
    }
  },
  methods: {
  },
  mounted () {
    const els = document.querySelectorAll('.dialogue-block')
    var scrollTime = 1 // Scroll time
    var scrollDistance = 70 // Distance. Use smaller value for shorter scroll and greater value for longer scroll

    const raf = () => {
      els.forEach(el => {
        var offsetY = el.offsetTop - window.scrollY
        if (offsetY < window.scrollY) {
          var offsetYPourcent = offsetY / window.innerHeight
          var scale = 0.5 + (offsetYPourcent * 0.7)
          el.style.transform = 'scale(' + scale + ')'
        }
      })
      requestAnimationFrame(raf)
    }

    raf()

    window.addEventListener('mousewheel', (e) => {

      e.preventDefault()

      var delta = e.wheelDelta / 120 || -e.detail / 3
      var scrollTop = window.scrollY
      var finalScroll = scrollTop - parseInt(delta * scrollDistance)
      TweenMax.to(window, scrollTime, {
        scrollTo: { y: finalScroll, autoKill: true },
        ease: Power1.easeOut,
        autoKill: true,
        overwrite: 5
      })

      // var offssetY = el.offsetTop - window.scrollY
      // var offsetYPourcent = Math.round(offssetY / window.innerHeight * 100)
      // console.log(offsetYPourcent)
      // console.log('scrollHeight : ' + el.scrollHeight)
      // console.log('scrollTop : ' + el.scrollTop)
      // console.log('clientHeight : ' + el.clientHeight)
    })
  }
}
</script>

<style scoped lang="scss">
#dialogue {
  padding-top: 30vh;
  position: relative;
  h1 {
    font-size: 26px;
    font-weight: 400;
  }
  .gradient-top {
    z-index: 5;
    position: fixed;
    max-width: 1400px;
    width: 80%;
    height: 40vh;
    top: 0;
    background: -moz-linear-gradient(top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.99) 1%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0b0b0b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }

  .narration-intro {
    text-align: center;
    margin-bottom: 10vh;
  }

  .dialogue-block {
    width: 75%;
    display: flex;
    margin-bottom: 10vh;
    transition: transform 0.1s ease;

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
