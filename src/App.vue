<template>
  <PageLoader />
  <router-view />
  <ScrollToTop />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
import PageLoader from "./components/PageLoader.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default defineComponent({
  name: 'App',
  components: {
    PageLoader, ScrollToTop, Footer
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "./styles/variables.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  user-select: none;
  scroll-behavior: smooth;
  text-overflow: ellipsis;
}
:root {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
html, body, #app {
  width: 100vw;
  height: 100vh;
  background: black;
}
#app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: hidden auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(60, 60, 60, 1);
  }
  &::-webkit-scrollbar-thumb {
    background: $c5;
  }
}
</style>