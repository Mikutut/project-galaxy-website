import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "@/views/Home.vue";
import RulesView from "@/views/Rules.vue";
import KeysView from "@/views/Keys.vue";
import RPHandbookView from "@/views/RPHandbook.vue";
import Error404View from "@/views/Error404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/rules',
    name: 'Rules',
    component: RulesView
  },
  {
    path: '/keys',
    name: 'Keys',
    component: KeysView
  },
  {
    path: '/rp-handbook',
    name: 'RPHandbook',
    component: RPHandbookView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: Error404View
  }
];

const router = createRouter({
  history: createWebHistory(`/project-galaxy-v2/`), //createWebHistory(`/`)
  routes
});

export default router;
