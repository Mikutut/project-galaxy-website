<template>
  <transition name="page-loader-fade">
    <main v-if="!pageLoaded">
      <div class="logo-container">
        <img src="@/assets/img/logo.png" />
      </div>
      <div class="metadata-container">
        <div class="progress-bar"></div>
        <span>Trwa ładowanie...</span>
      </div>
    </main>
  </transition>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  name: 'PageLoader',
  setup() {
    
    const store = useStore(key);

    const pageLoaded: Ref<boolean> = ref(false);

    document.addEventListener("readystatechange", () => {
      if(document.readyState === "complete") {
        pageLoaded.value = true;
        store.commit('switchPageLoaded', pageLoaded.value);
      } else { 
        pageLoaded.value = false;
        store.commit('switchPageLoaded', pageLoaded.value);
      }
    });

    return {
      pageLoaded
    };
  }
})
</script>
display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
<style lang="scss" scoped>
@import "../styles/color-palette.scss";

@keyframes progressBarAnim {
  from {
    left: -100%;
    transform: translateX(100%);
  } to {
    left: 100%;
    transform: translateX(0);
  }
}
@keyframes textGlow {
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
}

main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: black;
  overflow: hidden;
}

.logo-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > img {
    height: 500px;
    min-height: 0;
  }
}
.metadata-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > span {
    font-size: 3.5vh;
    color: white;
    letter-spacing: 0.25rem;

    animation: textGlow 3s alternate infinite linear;
  }
}
.progress-bar {
  width: 50%;
  height: 8px;
  border: 1px solid white;
  border-radius: 8px;
  z-index: 5;
  margin: 2rem;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    z-index: 4;
    position: relative;
    left: -100%;
    top: 0;
    width: 100px;
    height: 100%;
    background: map-get($colors, "c2");
    animation: progressBarAnim 5s infinite linear;
  }
}

/* VUE TRANSITIONS */
.page-loader-fade {
  &-enter-active, &-leave-active {
    transition: opacity .35s;
  }
  &-enter-from, &-leave-to {
    opacity: 0;
  }
}
/* END OF VUE TRANSITIONS */
</style>