<template>
  <nav id="navigation">
    <router-link :to="{ name: 'sources'}" class="route-sources">Sources</router-link>
    <router-link :to="{ name: 'about'}" class="route-about">About</router-link>
    <router-link :to="{ name: 'dialogue'}" class="route-dialogue">Dialogue</router-link>
    <router-link :to="{ name: 'home'}" class="route-home">Home</router-link>
    <div class="route-marker-container">
      <div class="route-marker"></div>
    </div>
  </nav>
</template>

<script>
import { TweenLite, Power1 } from 'gsap'
export default {
  name: 'Navigation',
  data () {
    return {
    }
  },
  watch: {
    '$route' (to, from) {
      this.changeRouteMarker(to)
    }
  },
  methods: {
    changeRouteMarker (newRoute) {
      let currentRouteName = newRoute.name
      let currentRouteLink = document.querySelector('.route-' + currentRouteName)
      TweenLite.to(this.marker, 0.3, {
        left: currentRouteLink.offsetLeft,
        width: currentRouteLink.offsetWidth,
        ease: Power1.easeInOut
      })
    }
  },
  mounted () {
    this.marker = document.querySelector('.route-marker')
    this.changeRouteMarker(this.$route)
  }
}
</script>

<style lang="scss" scoped>
#navigation {
  z-index: 100;
  display: inline-block;
  position: fixed;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left;
  left: 40px;
  top:35px;

  a {
    margin: 0 30px;
    padding: 15px 0 10px 0;
    color: #A7A7A7;
    opacity: 0.5;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }

    &.router-link-exact-active {
      transition: all 0.3s ease-in-out;
      color: white;
      opacity: 1;
    }

  }

  .route-marker-container {
    position: relative;
    background-color: #303030;
    width: 100%;
    margin-top: 10px;
    .route-marker {
      position: relative;
      top: 0;
      left: 0;
      background-color: #979797;
      height: 1px;
      width: 0;
    }
  }
}
</style>
