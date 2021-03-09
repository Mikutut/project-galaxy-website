import router from "@/router/index";
import { RouteParamValueRaw } from "vue-router";

interface PushOptions {
 path?: string;
 name?: string;
 params?: Record<string, string | number | RouteParamValueRaw[]>;
 replace?: boolean;
}

export const goToHome = () => {
  router.push({ name: 'Home' });
};
export const changeRoute = (opt: PushOptions) => {
  if(opt.path || opt.name) {
    router.push({
      path: opt.path ? opt.path : "/",
      name: opt.name ? opt.name : "Home",
      params: opt.params ? opt.params : undefined,
      replace: opt.replace ? opt.replace : false
    });
  }
};