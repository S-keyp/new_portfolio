import { createRouter, createWebHistory } from 'vue-router'


import Homepage from './../pages/Homepage.vue'


import FlowFieldView from './../views/canvas/FlowFieldView.vue'
import LinesCanvasViewVue from '../views/canvas/LinesCanvasView.vue'
import MouseParticlesView from './../views/canvas/MouseParticlesView.vue'
import PendulumView from './../views/canvas/PendulumView.vue'
import SorterCanvasView from './../views/canvas/SorterCanvasView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // PAGES
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },








    // VIEWS
    {
      path: '/flow-field',
      name: 'flow-field',
      component: FlowFieldView
    },
    {
      path: '/line-canvas',
      name: 'line-canvas',
      component: LinesCanvasViewVue
    },
    {
      path: '/mouse-particles',
      name: 'mouse-particles',
      component: MouseParticlesView
    },
    {
      path: '/pendulum',
      name: 'pendulum',
      component: PendulumView
    },
    {
      path: '/sorter-canvas',
      name: 'sorter-canvas',
      component: SorterCanvasView
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register,
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: Profile
    // },
    // {
    //   path: '/user_list',
    //   name: 'user_list',
    //   component: ListUser
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Test
    // },
  ]
})

export default router