<template>
  <PageLoader />
  <ModalsManager />
  <router-view v-slot="{ Component }">
    <transition name="view-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <ScrollToTopBtn />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/common/components/Footer.vue";
import ScrollToTopBtn from "@/common/components/ScrollToTop.vue";
import PageLoader from "@/common/components/PageLoader.vue";
import ModalsManager from "@/common/components/ModalsManager.vue";

export default defineComponent({
  components: {
    Footer,
    ScrollToTopBtn,
    PageLoader,
    ModalsManager
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "common/styles/color-palette.scss";

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  text-overflow: ellipsis;
  scroll-behavior: smooth;
}
* {

  &::-webkit-scrollbar {
    width: 4px;

    &-track {
      background: hsla(0, 0%, 0%, 1);
    }
    &-thumb {
      background: map-get($colors, "c1");
    }
  }
}
:root {
  font-size: 20px;
  font-family: 'Poppins', sans-serif, 'Arial', serif;
}
html, body {
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
}

#app {
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.view-wrapper {
  width: 100%;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
}

#server-status-indicator {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  background: black;

  & > p {
    font-size: 1vw;
    color: white;
    text-align: center;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      border-right: 1px dashed white;
    }
  }
}

/* VUE TRANSITIONS */
.view-fade {
  &-enter-active, &-leave-active {
    transition: opacity .5s;
  }
  &-enter-from, &-leave-to {
    opacity: 0;
  }
}
/* END OF VUE TRANSITIONS */

/* MEDIA QUERIES */
/* END OF MEDIA QUERIES */
</style>