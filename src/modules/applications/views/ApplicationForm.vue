<template>
  <div class="view-wrapper">
    <Header />
    <main data-auto-scroll-to>

    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Header from "@/common/components/Header.vue";
import { manageAutoScroll } from "@/common/scrollManager";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";

export default defineComponent({
  name: 'ApplicationsFormView',
  components: {
    Header
  },
  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute();

    onMounted(() => manageAutoScroll());

    return {
      route
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../../../common/styles/color-palette.scss";

main {
  width: 100%;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
}
</style>