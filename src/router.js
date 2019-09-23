import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ './views/Main.vue'),
    children: [
      {
        path: 'question',
        name: 'question',
        redirect: 'question/step1/parrot',
        component: () =>
          import(/* webpackChunkName: "question" */ './views/Question.vue'),
        children: [
          {
            path: 'step1/:name',
            component: () =>
              import(/* webpackChunkName: "step1" */ './components/steps/Step1.vue')
          },
          {
            path: 'step2/:name',
            component: () =>
              import(/* webpackChunkName: "step2" */ './components/steps/Step2.vue')
          },
          {
            path: 'step3/:name',
            component: () =>
              import(/* webpackChunkName: "step3" */ './components/steps/Step3.vue')
          },
          {
            path: 'step4/:name',
            component: () =>
              import(/* webpackChunkName: "step4" */ './components/steps/Step4.vue')
          },
          {
            path: 'step5/:name',
            component: () =>
              import(/* webpackChunkName: "step5" */ './components/steps/Step5.vue')
          },
          {
            path: 'step6/:name',
            component: () =>
              import(/* webpackChunkName: "step6" */ './components/steps/Step6.vue')
          },
          {
            path: 'step7/:name',
            component: () =>
              import(/* webpackChunkName: "step7" */ './components/steps/Step7.vue')
          }
        ]
      },
      {
        path: 'card',
        name: 'card',
        component: () =>
          import(/* webpackChunkName: "card" */ './views/Card.vue')
      },
      {
        path: 'result/:name',
        name: 'result',
        component: () =>
          import(/* webpackChunkName: "result" */ './views/Result.vue')
      },
      {
        path: '*',
        redirect: '{name: home}'
      }
    ]
  }
  ]
})
