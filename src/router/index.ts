import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import Home from "../views/Home.vue";
import Error404 from "../views/404.vue";
import Rules from "../views/Rules.vue";
import Applications from "../views/Applications.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/project-galaxy/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project-galaxy/regulamin',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/project-galaxy/aplikacje',
    name: 'Applications',
    component: Applications
  },
  {
    path: '/project-galaxy/:pathName(.*)*',
    name: '404',
    component: Error404
  }
]

const scrollBehavior: RouterScrollBehavior = () => {
  return { top: 0, left: 0 };
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
