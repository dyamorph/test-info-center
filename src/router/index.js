import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderHistoryView from '../views/OrderHistoryView.vue'

const router = createRouter({
  history: createWebHistory('/test-info-center/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderHistoryView
    }
  ]
})

export default router
