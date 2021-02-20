<template>
  <teleport to="body">
    <transition name="modal-fade" mode="out-in">
      <div class="backdrop" v-if="Object.values(modalsStates).find((s) => s === true) !== undefined">
        <ConnectingToServerModal v-if="modalsStates.connectingToServer" />
        <ReportIssueModal v-else-if="modalsStates.reportIssue" />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";
import ConnectingToServerModal from "@/modules/connecting-to-server/components/ConnectingToServer.vue";
import ReportIssueModal from "@/modules/report-issue/components/ReportIssue.vue";

export default defineComponent({
  name: 'ModalManager',
  components: {
    ConnectingToServerModal,
    ReportIssueModal
  },
  setup() {
    const store = useStore(key);

    const modalsStates = computed(() => store.getters.getModalsStates);

    return {
      modalsStates
    };
  }
})
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 0%, 0.8);
  z-index: 999;
}

/* VUE TRANSITIONS */
.modal-fade {
  &-enter-active, &-leave-active {
    transition: opacity .3s;
  }
  &-enter-from, &-leave-to {
    opacity: 0;
  }
}
/* END OF VUE TRANSITIONS */
</style>