export const manageAutoScroll = () => {
  const scrollable: HTMLElement = document.querySelector("[data-auto-scroll-to]:first-of-type") as HTMLElement;
  (document.getElementById("app") as HTMLElement).scrollTo({top: 0, left: 0, behavior: 'smooth'});
  setTimeout(() => (document.getElementById("app") as HTMLElement).scrollTo({
    top: scrollable.offsetTop,
    left: 0,
    behavior: 'smooth'
  }), 1000);
};