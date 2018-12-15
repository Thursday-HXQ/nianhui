import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: "/enter"
    },
    {
      path: '/enter',
      name: 'Enter',
      component: () => import('../pages/Enter/Enter.vue')
    }
  ]
})
