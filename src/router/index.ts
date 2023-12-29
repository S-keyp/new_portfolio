import { createRouter, createWebHistory } from 'vue-router'


import Homepage from './../pages/Homepage.vue'


import Canvas3dView from './../components/views/canvas/Canvas3dView.vue'
import FlowFieldView from './../components/views/canvas/FlowFieldView.vue'
import LinesCanvasViewVue from '../components/views/canvas/LinesCanvasView.vue'
import MouseParticlesView from './../components/views/canvas/MouseParticlesView.vue'
import PendulumView from './../components/views/canvas/PendulumView.vue'
import SorterCanvasView from './../components/views/canvas/SorterCanvasView.vue'
import TestBetterCanvasVue from '../components/canvas/TestBetterCanvas.vue'
import MeteoAPIVue from '../components/meteoApi/MeteoAPI.vue'


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
    
    
    //Meteo
    {
      path:'/meteo',
      name: 'meteo',
      component: MeteoAPIVue
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
    {
      path: '/canvas3d',
      name: 'canvas3d',
      component: Canvas3dView
    },
  ]
})

export default router