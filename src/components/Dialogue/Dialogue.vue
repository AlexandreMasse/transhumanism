<template>
  <div id="dialogue">
    <div class="gradient-top"></div>

    <dialogue-side-progression :dialogue="dialogue" :year="currentYear" :month="currentMonth" @scrollToPosition="scrollToPosition"/>
    <div class="dialogue-container">
      <div class="narration-intro">
        <p>The two protagonists are having drink and come up talking about transhumanism.</p>

        <p>N.A., the pro-transhumanism one has a newspaper and show his friend an article he just read about transhumanism.</p>
      </div>
        <div v-for="(year, index) in dialogue" :key="index" class="year" >
          <div v-for="(month, index) in year.months" :key="index" class="month">
              <div v-for="(word, index) in month.words" :key="index">

              <div v-if="word.type === 'NA'" class="dialogue-block na-talking" :data-month="month.monthName" :data-year="year.yearName">
                <div class="dialogue-name">N.A.</div>
                <div class="dialogue-content">
                  <p v-if="word.article_included">
                   {{ word.content_before }} <a :href="word.link" target="_blank">{{ word.content_link }}</a> {{ word.content_after }}
                  </p>
                  <p v-else>{{ word.content }}</p>
                </div>
              </div>

              <div v-if="word.type === 'BL'" class="dialogue-block bl-talking" :data-month="month.monthName" :data-year="year.yearName">
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
    <credit/>
  </div>
</template>

<script>
import dialogue from '../../data/dialogue.json'
import DialogueSideProgression from './DialogueSideProgression'
import Credit from '../Other/Credit'
import { TweenMax, Power2, Power3 } from 'gsap'
require('gsap/ScrollToPlugin')

export default {
  name: 'diaogue',
  components: {DialogueSideProgression, Credit},
  data () {
    return {
      dialogue,
      currentScroll: 0,
      currentYear: '2017',
      currentMonth: 'October'
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
    updateDialogueScale () {
      const update = () => {
        this.dialogueBlocks.forEach(el => {
          let offsetY = el.offsetTop - window.scrollY
          let offsetYPourcent = offsetY / window.innerHeight

          if (offsetYPourcent > -0.05 && offsetYPourcent < 1.05) {
            let scale = 0.8 + (offsetYPourcent * 0.4)
            el.style.transform = 'scale(' + scale + ')'
            el.style.color = 'white'
          }
        })
        this.raf = requestAnimationFrame(update)
      }
      update()
    },
    updateYearAndMonth () {
      this.dialogueBlocks.forEach(el => {
        let offsetY = el.offsetTop - window.scrollY
        let offsetYPourcent = offsetY / window.innerHeight

        if (offsetYPourcent > 0 && offsetYPourcent < 0.9) {
          const year = el.getAttribute('data-year')
          const month = el.getAttribute('data-month')
          if (this.currentYear !== year) {
            this.currentYear = year
          }
          if (this.currentMonth !== month) {
            this.currentMonth = month
          }
        }
      })
    },
    smoothScroll (e) {
      e.preventDefault()
      let scrollTime = 1.5 // Scroll time
      let scrollDistance = 250 // Distance. Use smaller value for shorter scroll and greater value for longer scroll
      let delta = e.wheelDelta / 120 || -e.detail / 3
      let scrollTop = window.scrollY
      let finalScroll = scrollTop - parseInt(delta * scrollDistance)

      TweenMax.to(window, scrollTime, {
        scrollTo: { y: finalScroll, autoKill: true },
        ease: Power3.easeOut,
        autoKill: true,
        overwrite: 5
      })
    },
    scrollToPosition (position, duration, delay) {
      TweenMax.to(window, duration, {
        scrollTo: { y: position },
        ease: Power2.easeInOut,
        delay: delay
      })
    },
    onMouseWheel (e) {
      this.smoothScroll(e)
    },
    onScroll () {
      this.currentScroll = window.scrollY
      this.updateYearAndMonth()
    },
    onPageEnter () {
      window.addEventListener('mousewheel', this.onMouseWheel)
      window.addEventListener('scroll', this.onScroll)
      this.updateDialogueScale()
      this.scrollToPosition(this.currentScroll, 2.5, 0.6)
    },
    onPageLeave () {
      window.removeEventListener('mousewheel', this.onMouseWheel)
      window.removeEventListener('scroll', this.onScroll)
      cancelAnimationFrame(this.raf)
    }
  },
  mounted () {
    this.dialogueBlocks = document.querySelectorAll('.dialogue-block')
    window.addEventListener('mousewheel', this.onMouseWheel)
    window.addEventListener('scroll', this.onScroll)
    this.updateDialogueScale()
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'dialogue') {
        this.onPageEnter()
      } else if (from.name === 'dialogue') {
        this.onPageLeave()
      }
    }
  }
}
</script>

<style scoped lang="scss">

$mediaMobile: 500px !default;

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
    max-width: 1300px;
    width: 100%;
    height: 40vh;
    top: 0;
    pointer-events: none;
    background: -moz-linear-gradient(top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.99) 1%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0b0b0b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }

  .narration-intro {
    text-align: center;
    margin-bottom: 130px;
  }

  .dialogue-block {
    width: 70%;
    display: flex;
    margin-bottom: 80px;
    transition: transform 0.1s ease;

    @media screen and (max-width : $mediaMobile) {
      width: 100%;
      margin-bottom: 50px;
    }

    p {
      margin: 0;
      font-size: 20px;
      line-height: 40px;

      @media screen and (max-width : $mediaMobile) {
        font-size: 12px;
        line-height: 25px;
      }

     &::first-letter {
        padding-left: 40px;

       @media screen and (max-width : $mediaMobile) {
         padding-left: 25px;
       }
     }

      &:before {
        content: '';
        background: white;
        height: 2px;
        width: 25px;
        position: absolute;
        transform: translateY(-50%);
        top: 20px;

        @media screen and (max-width : $mediaMobile) {
          width: 15px;
          top: 13px;
        }
      }
    }
    .dialogue-name {
      font-size: 25px;
      padding: 0 2vw;

      @media screen and (max-width : $mediaMobile) {
        font-size: 16px
      }
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
