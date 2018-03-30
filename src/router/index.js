import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Subjects from '@/components/Subjects'
import Sources from '@/components/Sources'

Vue.use(Router)

export default new Router({
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
      path: '/subjects',
      name: 'subjects',
      component: Subjects
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
