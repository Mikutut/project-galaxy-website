<template>
  <transition name="route-change-fade">
    <router-view />
  </transition>
  <ScrollToTop />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default defineComponent({
  name: 'App',
  components: {
    ScrollToTop, Footer
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "styles/variables.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  user-select: none;
  text-overflow: ellipsis;
  scroll-behavior: smooth;
}
:root {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
html, body, #app {
  height: 100vh;
  width: 100vw;
  overflow: hidden auto;
  background: black;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba($c5, 1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(30, 30, 30, 1);
  }
}

.route-change-fade-enter-active, .route-change-fade-leave-active {
  transition: opacity .5s;
}
.route-change-fade-enter-from, .route-change-fade-leave-to {
  opacity: 0;
}
</style>
