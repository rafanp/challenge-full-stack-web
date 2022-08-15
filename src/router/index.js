import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/Students/ListView.vue'),
  },
  {
    path: '/students/new',
    name: 'students',
    component: () => import('../views/Students/RegisterView.vue'),
  },
  {
    path: '/students/:id/edit',
    name: 'students',
    component: () => import('../views/Students/RegisterView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
