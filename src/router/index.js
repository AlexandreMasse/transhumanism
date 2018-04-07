import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Dialogue from '@/components/Dialogue'
import Sources from '@/components/Sources'

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
