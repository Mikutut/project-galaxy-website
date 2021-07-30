<template>
  <main>
    <div v-if="issueReportState === 'unavailable'">
      <h1>Wygląda na to, że funkcja ta jest obecnie niedostępna</h1>
      <h2>Możesz spróbować sprawdzić jej dostępność jeszcze raz, za pomocą przycisku poniżej</h2>
      <button @click="checkForAvailability">Sprawdź dostępność</button>
      <button @click="switchModalState('reportIssue')">Ukryj to okno</button>
    </div>
    <div v-else-if="issueReportState === 'checking-for-availability'">
      <h1>Sprawdzanie dostępności...</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, Ref, ref } from "vue";
import { switchModalState } from "@/common/modalsManagerHelper";

type IssueReportState = "not-ready" | "sending" | "sent" | "error" | "unavailable" | "checking-for-availability";

export default defineComponent({
  name: 'ReportIssueModal',
  components: {},
  setup() {

    const issueReportState: Ref<IssueReportState> = ref("not-ready");

    const checkForAvailability = () => {
      issueReportState.value = "checking-for-availability";
      issueReportState.value = "unavailable";
    };

    onBeforeMount(() => checkForAvailability());

    return {
      switchModalState,
      checkForAvailability,
			issueReportState
    };
  }
})
</script>

<style lang="scss" scoped>
main {
  padding: 1rem;
  border: 1px solid white;
  border-radius: 8px;
  background: black;
  
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    & > h1, & > h2 {
      color: white;
      text-align: center;
      margin: 0.5rem 0;
    }
    & > h1 {
      font-size: calc(1rem + 1.25vw);
    }
    & > h2 {
      font-size: calc(1rem + 1vw);
    }
    & > button {
      width: 80%;
      padding: 0.25rem;
      border: 1px solid transparent;
      background: transparent;
      color: white;
      font-size: calc(1rem + 1vw);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.25rem 0;
      cursor: pointer;
    }
  }
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  main {
    & > div {

      & > button {
        border-color: white;
        color: white;

        &:disabled {
          border-color: hsl(0, 0%, 40%);
          color: hsl(0, 0%, 40%);
          cursor: default;
        }
      }
    }
  }
}
@media screen and (min-width: 769px) {
  main {

    & > div {
      & > button {
        transition: border-color .25s, color .25s;

        &:hover {
          border-color: white;
          color: white;

          &:disabled {
            border-color: hsl(0, 0%, 40%);
            color: hsl(0, 0%, 40%);
            cursor: default;
          }
        }
      }
    }
  }
}
/* END OF MEDIA QUERIES */
</style>