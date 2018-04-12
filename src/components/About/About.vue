<template>
  <div id="about">
    <div class="about-container">
      <p class="text">Interactive Designer & Developer students from Gobelins school, we were asked to do a monitoring from September 2017 to April 2018 about transhumanism.</p>

      <h2>Transhumanism in a nutshell</h2>
      <p class="text">
        Transhumanism can be defined as the belief or theory that the human race can evolve beyond its current physical and mental limitations, by means of science and technology.
        <br><br>
        A transhuman or post-human redefine entirely the conception of human organism. The post-human would own standard capacity entirely superior to an traditional human. He would not be considered as human according to our current standard.
        <br><br>
        This movement, represented by a «H+» would mean a an amelioration of human, considering disability, pain, disease, aging and death as “limited” aspect that can be fix.
      </p>

      <h2>Limits</h2>
      <p class="text">
        Transhumanists realise that some technology used could potentially cause some negative aspect to human life and know that it could be a danger. So they are working on understanding what could be the danger and how could they prevent any potential disaster.
        <br><br>
        It should be noted that transhumanism is increasing in popularity and some scientists, philosophers and sociologists begin to take this subject very seriously: transhumanism offers endless possibilities.
      </p>

      <h2>Transhumanism nowadays</h2>
      <p class="text">
        Transhumanism begins to merge into our life. We can already notice some aspect of transhumanism around us.
        <br><br>
        First of all, the human being has always used technology to create something useful. Human use transhumanism to improve his everyday life. In a world where we are all in a rush, we need to do things faster, to be able to do different things at the same time. We need devices in order to help us. And to gain even more time, these devices are now part of our own body: electronic implants, connected watch, brain-implant… A new generation of gadgets has come.
        <br><br>
        Transhumanism can also be vital. As human, we are still dependant of our body. The human being can not defeat disability yet, so he is looking for a way to make it easier to live by adding or replacing parts of his body (legs prosthesis, eye implant). In some case, it can even save a life, by replacing deficient organs (artificial heart for instance). Transhumanism is a big progress in medicine.
      </p>
    </div>
    <div class="about-container">
      <p class="text">
        In a more global way, we can say that one of the aspect of transhumanism is to increase the man’s native abilities. Men can be smarter and stronger thanks to technology.
        <br><br>
        But all of this technology is a part of the human robotisation. We are creating hybrids humans, half machine half man, a combination of organs and gene biologic and non-biologic.
        <br><br>
        Another aspect of transhumanism concerns the biggest fear of men: death. The purpose of transhumanists would be erasing death. In fact, men’s life expectancy extends every year because the humanity progress. The ultimate goal would make us live forever, perhaps by digitizing our brain. Man is anticipating.
        <br><br>
        All of this raises a lot of ethic question. A lot of people are against transhumanism due to various reason. These new subject still bother consciences and the debate stays open.
        <br><br>
        After all, increasing physical and mental abilities, isn’t forgetting what defines humanity? Does making us stronger will make us happier? And how far should we go? Where is the limit between an implant to cure Parkinson's disease and an implant to extend memory? Manipulating DNA to cure a “default”, or even to choose some particular genes, is it really moral?

      <h2>The future</h2>
      <p class="text">
        So what will the future looks like? We can imagine that transhumanism will be more and more part of our life. Man will be even more connected, even more smart, even more strong. All of our abilities will be increased: memory, vision, hearing, health…
        <br><br>
        We can plan that artificial nanomachine provided with intelligence will be implemented to our body get our muscles, cells or bones better. Organ prosthesis, currently used to replace a deficient organ will be use to replace a healthy one in order to make it stronger.
        <br><br>
        We will be able to save our mind, our thoughts, our dreams in a device and make it endless. We will face and defeat death. Lots of diseases will be cured by means of technology, disabilities will be reduced drastically. Men will be equal due to technology by deleting body inequalities… but won’t it create new equalities? Will those technologies be affordable for everyone?
        <br><br>
        Finally, it can be noticed that everything is replaceable except our mind. Are we still human when the only thing left is our mind? Will we get to the point where we can replace everything inside us except our mind?
        <br><br>
      </p>
    </div>

    <credit/>

    <img src="../../assets/images/bioshock.png" alt="" class="bioshock">
  </div>
</template>

<script>
import Credit from '../Other/Credit.vue'
import { TweenLite, Power2 } from 'gsap'
require('gsap/ScrollToPlugin')
export default {
  name: 'About',
  components: {Credit},
  data () {
    return {
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
      if (to.name === 'about') {
        this.onPageEnter()
      }
    }
  }
}
</script>

<style scoped lang="scss">
#about {
padding-top: 80px;
padding-left: 40px;

  .about-container {
    width: 80%;
    max-width: 700px;
    margin-bottom: 80px;
  }

  h2 {
    font-size: 26px;
    font-weight: 400;
    text-align: left;
    margin: 5vh 0;
  }

  p.text {
    font-size: 16px;
    text-align: left;
    line-height: 136%;
    letter-spacing: 1px;
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
