<template>
  <footer data-auto-scroll-to-fallback>
    <a href="https://mikut.dev">
      <img src="https://cdn.mikut.dev/mikut/img/icon.png" />
    </a>
    <span>
      2020 - 2021
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Footer',
  setup() {

    return {};
  }
})
</script>

<style lang="scss" scoped>
footer {
  padding: 5px;
  width: 100vw;
  background: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & > a {
    height: 100%;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > img {
      min-height: 0;
      height: 40px;
    }
  }
  & > span {
    font-size: 2vh;
    color: hsl(0, 0%, 35%);
    margin-left: 20px;
  }
}
</style>