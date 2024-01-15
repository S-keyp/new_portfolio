import { createRouter, createWebHistory } from 'vue-router'


import Homepage from './../pages/Homepage.vue'


import Canvas3d from './../components/canvas/3d.vue'
import FlowField from './../components/canvas/FlowField.vue'
import LinesCanvasVue from '../components/canvas/Lines.vue'
import MouseParticles from './../components/canvas/MouseParticles.vue'
import Pendulum from './../components/canvas/Pendulum.vue'
import SorterCanvas from './../components/canvas/Sorter.vue'
import TestBetterCanvasVue from '../components/canvas/Test.vue'
import MeteoAPIVue from '../components/meteoApi/MeteoAPI.vue'
import TestThreeJsVue from '../components/threejs/TestThreeJs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // PAGES
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    




    // QUICK TEST
    {
      path:'/test',
      name: 'test',
      component: TestBetterCanvasVue
    },

    //THREEJS
    {
      path: '/three',
      name: 'three',
      component: TestThreeJsVue
    },
    
    
    //Meteo
    {
      path:'/meteo',
      name: 'meteo',
      component: MeteoAPIVue
    },





    // Canvas Components
    {
      path: '/flow-field',
      name: 'flow-field',
      component: FlowField
    },
    {
      path: '/line-canvas',
      name: 'line-canvas',
      component: LinesCanvasVue
    },
    {
      path: '/mouse-particles',
      name: 'mouse-particles',
      component: MouseParticles
    },
    {
      path: '/pendulum',
      name: 'pendulum',
      component: Pendulum
    },
    {
      path: '/sorter-canvas',
      name: 'sorter-canvas',
      component: SorterCanvas
    },
    {
      path: '/canvas-3d',
      name: 'canvas-3d',
      component: Canvas3d
    },
  ]
})

export default router