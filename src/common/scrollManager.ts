import { store } from "@/store/index";
import { computed, watch } from "vue";

const isPageLoaded = computed(() => store.getters.getPageLoaded);

export const scrollToTop = () => {
  (document.querySelector("#app") as HTMLElement).scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

export const manageAutoScroll = () => {
  if(isPageLoaded.value) {
    const scrollable: HTMLElement | null = document.querySelector("[data-auto-scroll-to]:first-of-type");
    scrollToTop();
    if(scrollable !== null) {
      setTimeout(() => (document.getElementById("app") as HTMLElement).scrollTo({
        top: scrollable.offsetTop,
        left: 0,
        behavior: 'smooth'
      }), 1000);
    } else {
      const footer: HTMLElement = document.querySelector("[data-auto-scroll-to-fallback]") as HTMLElement;
      setTimeout(() => (document.getElementById("app") as HTMLElement).scrollTo({
        top: footer.offsetTop,
        left: 0,
        behavior: 'smooth'
      }), 1000);
    }
  }
};

watch(isPageLoaded, (iPL: boolean) => {
  if(iPL) {
    manageAutoScroll();
  }
});

