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

export default defineComponent({
  name: 'HomeView',
  components: {
    Header
  },
  setup() {
    onMounted(() => manageAutoScroll());
    return {};
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
}
</style>