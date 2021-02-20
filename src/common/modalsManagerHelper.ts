import { store } from "@/store/index";

export const switchModalState = (name: string) => {
  store.commit("switchModalState", name);
}