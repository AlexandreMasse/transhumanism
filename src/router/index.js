import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import About from '../components/About/About.vue'
import Dialogue from '../components/Dialogue/Dialogue.vue'
import Sources from '../components/Sources/Sources.vue'

Vue.use(Router)

export default new Router({
  base: '/transhumanism/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dialogue',
      name: 'dialogue',
      component: Dialogue
    },
    {
      path: '/sources',
      name: 'sources',
      component: Sources
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
