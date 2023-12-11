import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './../pages/Homepage.vue'
import PendulumView from './../views/PendulumView.vue'
// import Login from './../views/Login.vue'
// import Profile from './../views/Profile.vue'
// import ListUser from './../views/ListUser.vue'
// import Test from './../views/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Homepage
    },
    {
        path: '/pendulum',
        name: 'pendulum',
        component: PendulumView
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