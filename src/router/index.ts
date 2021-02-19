import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "@/views/Home.vue";
import RulesView from "@/views/Rules.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
