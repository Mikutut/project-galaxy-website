import { registerRuntimeCompiler } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import Main from "../views/Main.vue";
import Rules from "../views/Rules.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'rules',
        name: 'Rules',
        component: Rules 
      }
    ]
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
