import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
