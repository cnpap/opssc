import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import HomeView from '@/pages/home/Home.vue';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import Login from '@/pages/auth/Login.vue';
import GithubRedirect from '@/pages/oauth/GithubRedirect.vue';
import { ROUTE_AUTH, ROUTE_AUTH_LOGIN } from './lib/const';
import Project from './pages/home/project/Project.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'project',
        name: 'project',
        component: Project,
      },
    ],
  },
  {
    path: '/oauth',
    component: AuthLayout,
    children: [
      {
        path: 'redirect',
        component: GithubRedirect,
      },
    ],
  },
  {
    path: ROUTE_AUTH,
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: ROUTE_AUTH_LOGIN,
        component: () => Login,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
