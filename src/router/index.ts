import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import Rules from "../views/Rules.vue";
import Home from "../views/Home.vue";
import Error404 from "../views/Error404.vue";
import Applications from "../views/Applications/Applications.vue";
import ApplicationsSelect from "../views/Applications/ApplicationsSelect.vue";
import ApplicationsWL from "../views/Applications/ApplicationsWL.vue";
import ApplicationsFraction from "../views/Applications/ApplicationsFraction.vue";
import ApplicationsSupport from "../views/Applications/ApplicationsSupport.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/project-galaxy',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project-galaxy/rules',
    name: 'Rules',
    component: Rules,
  },
  {
    path: '/project-galaxy/applications',
    name: 'Applications',
    component: Applications,
    children: [
      {
        path: '',
        name: 'ApplicationsSelect',
        component: ApplicationsSelect,
        props: true
      },
      {
        path: 'wl',
        name: 'ApplicationsWL',
        component: ApplicationsWL
      },
      {
        path: 'fraction',
        name: 'ApplicationsFraction',
        component: ApplicationsFraction
      },
      {
        path: 'support',
        name: 'ApplicationsSupport',
        component: ApplicationsSupport
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: Error404
  }
]

const scrollBehavior: RouterScrollBehavior = () => {
  return new Promise((res) => {
    document.getElementById("app").scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      if(document.getElementsByClassName('scroll-to').length > 0) {
        document.getElementById("app").scrollTo({ top: (document.getElementsByClassName('scroll-to')[0] as HTMLElement).offsetTop + 5 ?? 0, left: 0, behavior: 'smooth' });
      }
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
