<template>
  <transition name="scroll-to-top-btn-hide">
    <button @click="windUp();" class="scroll-to-top-btn" v-if="thresholdReached">
      <i class="fas fa-arrow-up"></i>
      <p>Powrót do góry</p>
    </button>
  </transition>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: 'ScrollToTopBtn',
  setup() {

    const thresholdReached: Ref<boolean> = ref(false);

    (document.getElementById("app") as HTMLElement).addEventListener("scroll", (ev: Event) => {
      const appWrapper: HTMLElement = document.getElementById("app") as HTMLElement;
      const mainHeader: HTMLElement = document.querySelector("header:first-of-type") as HTMLElement;
      if(appWrapper.scrollTop > mainHeader.offsetTop + mainHeader.offsetHeight) {
        thresholdReached.value = true;
      } else thresholdReached.value = false;
    });

    return {
      thresholdReached,
      windUp: () => {
        (document.getElementById("app") as HTMLElement).scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../styles/color-palette.scss";

.scroll-to-top-btn {
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  z-index: 9900;
  bottom: 3vmin;
  right: 3vmax;
  height: 50px;
  width: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: width .25s;
  background: black;
  padding: 0.25rem;
  cursor: pointer;

  &:hover {
    width: 200px;

    & > p {
      width: 100%;
      transform: scale(1);
    }
  }

  & > i {
    color: map-get($colors, "c1");
    font-size: 2rem;
  }
  & > p {
    display: inline-block;
    width: 0;
    transform: scale(0);
    font-size: 0.75rem;
    transition: transform .35s, width .35s;
    color: white;
    text-align: center;
  }
}

/* VUE TRANSITIONS */
.scroll-to-top-btn-hide {
  &-enter-active, &-leave-active {
    transition: transform .2s;
  }
  &-enter-from, &-leave-to {
    transform: scale(0);
  }
}
/* END OF VUE TRANSITIONS */
</style>