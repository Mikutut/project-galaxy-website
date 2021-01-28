import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import Home from "../views/Home.vue";
import Error404 from "../views/404.vue";
import Rules from "../views/Rules.vue";
import Applications from "../views/Applications/Applications.vue";
import ApplicationsSelect from "../views/Applications/ApplicationsSelect.vue";
import ApplicationsWL from "../views/Applications/ApplicationsWL.vue";
import ApplicationsFraction from "../views/Applications/ApplicationsFraction.vue";
import ApplicationsSupport from "../views/Applications/ApplicationsSupport.vue";

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
    component: Applications,
    children: [
      {
        path: '/project-galaxy/aplikacje/',
        name: 'ApplicationsSelect',
        component: ApplicationsSelect
      },
      {
        path: '/project-galaxy/aplikacje/wl',
        name: 'ApplicationsWL',
        component: ApplicationsWL
      },
      {
        path: '/project-galaxy/aplikacje/fraction',
        name: 'ApplicationsFraction',
        component: ApplicationsFraction
      },
      {
        path: '/project-galaxy/aplikacje/support',
        name: 'ApplicationsSupport',
        component: ApplicationsSupport
      }
    ],
    props: true
  },
  {
    path: '/project-galaxy/:pathName(.*)*',
    name: '404',
    component: Error404
  }
]

const scrollBehavior: RouterScrollBehavior = () => {
  return new Promise((res) => {
    document.getElementById("app").scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      document.getElementById("app").scrollTo({ top: (document.getElementsByClassName('scroll-to')[0] as HTMLElement).offsetTop + 5 ?? 0, left: 0, behavior: 'smooth' });
      res();
    }, 1000);
  });
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: scrollBehavior
})

export default router
