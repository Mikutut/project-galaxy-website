<template>
  <transition name="page-loader-fade">
    <main v-if="!pageLoaded">
      <div class="logo-container">
        <img src="@/assets/img/logo.png" />
      </div>
      <div class="metadata-container">
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
    height: 30rem;
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
    font-size: calc(1rem + 2vw);
    color: white;
    letter-spacing: 0.25rem;

    animation: textGlow 3s alternate infinite linear;
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