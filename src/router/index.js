import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: ''
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About | '
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

router.afterEach((to, from) => {
  document.title = to.meta.title + 'TK — Wanted title'
})

export default router
