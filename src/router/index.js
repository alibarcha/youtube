import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import WatchVideo from '../views/WatchVideo.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/watch/:id',
      name: 'watch',
      component:WatchVideo,
      props:true
    },
    {
      path: '/profile',
      name: 'profile',
      component:Profile
    },
    {
      path: '/about',
      name: 'about',
      component:About
    }
  ]
})

export default router
