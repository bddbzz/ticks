import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/waterfall',
    name: 'waterfall',
    component: () => import(/* webpackChunkName: 'waterfall' */ '../views/waterfall.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: 'grid' */ '../views/grid.vue')
  },
  {
    path: '/triangle',
    name: 'triangle',
    component: () => import(/* webpackChunkName: 'triangle' */ '../views/triangle.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
