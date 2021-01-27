<template>
  <transition name="route-change-fade">
    <router-view />
  </transition>
  <ScrollToTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default defineComponent({
  name: 'App',
  components: {
    ScrollToTop
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
}
:root {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
html, body, #app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black;
}

.view-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 100%;
  height: 100%;
  width: 100%;
  overflow: hidden auto;
  flex: 1 0;
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
