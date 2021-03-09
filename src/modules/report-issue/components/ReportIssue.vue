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
    <div v-else-if="issueReportState === 'not-ready'">
      <h1>Formularz zgłoszeniowy dot. problemu ze stroną Project Galaxy</h1>
      <FormInput v-model="reportIssueData.name" :placeHolder="'Twój nick (opcjonalnie)'"/>
      <FormInput v-model="reportIssueData.topic" :placeHolder="'Temat (opcjonalnie)'" /> 
      <FormTextarea v-model="reportIssueData.description" :placeHolder="'Opis problemu'" />
      <button @click="sendReport();" :disabled="!reportIssueData.canSend">Wyślij</button>
      <button @click="switchModalState('reportIssue')">Ukryj to okno</button>
    </div>
    <div v-else-if="issueReportState === 'sending'">
      <h1>Wysyłanie zgłoszenia...</h1>
      <h2>Prosimy o odrobinę cierpliwości</h2>
    </div>
    <div v-else-if="issueReportState === 'sent'">
      <h1>Zgłoszenie zostało pomyślnie wysłane!</h1>
      <button @click="switchModalState('reportIssue')">Ukryj to okno</button>
    </div>
    <div v-else-if="issueReportState === 'error'">
      <h1>Wystąpił błąd podczas wysyłania zgłoszenia</h1>
      <h2>Spróbuj ponowne później lub przekaż nam swoje niezadowolenie poprzez nasz serwer Discord.</h2>
      <button @click="switchModalState('reportIssue')">Ukryj to okno</button>
    </div>
  </main>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { defineComponent, onBeforeMount, Ref, ref, watch, reactive } from "vue";
import { switchModalState } from "@/common/modalsManagerHelper";
import FormInput from "@/common/components/Forms/FormInput.vue";
import FormTextarea from "@/common/components/Forms/FormTextarea.vue";

type IssueReportState = "not-ready" | "sending" | "sent" | "error" | "unavailable" | "checking-for-availability";

interface ReportIssueData {
  name: string;
  topic: string;
  description: string;
  canSend: boolean;
}

export default defineComponent({
  name: 'ReportIssueModal',
  components: {
    FormInput,
    FormTextarea
  },
  setup() {

    const issueReportState: Ref<IssueReportState> = ref("not-ready");
    const reportIssueData: ReportIssueData = reactive({
      name: "",
      topic: "",
      description: "",
      canSend: false
    });

    const checkForAvailability = () => {
      issueReportState.value = "checking-for-availability";
      axios.get("https://api.mikut.dev/v1/info")
        .then((res: AxiosResponse<unknown>) => {
          if(res.status !== 200) {
            issueReportState.value = "unavailable";
          } else issueReportState.value = "not-ready";
        })
        .catch(() => issueReportState.value = "unavailable");
    };

    const sendReport = () => {
      issueReportState.value = "sending";
      const packet = {
        project: "project-galaxy-website",
        name: reportIssueData.name,
        topic: reportIssueData.topic,
        description: reportIssueData.description
      };
      axios.post("https://api.mikut.dev/v1/report-issue", packet)
        .then((res: AxiosResponse<unknown>) => {
          if(res.status !== 200) {
            issueReportState.value = "error";
          } else issueReportState.value = "sent";
        })
        .catch(() => issueReportState.value = "error");
    };

    onBeforeMount(() => checkForAvailability());

    watch(reportIssueData, (repIssData: ReportIssueData) => {
      if(repIssData.description.length > 0) {
        reportIssueData.canSend = true;
      } else reportIssueData.canSend = false;
    });

    return {
      switchModalState,
      issueReportState,
      checkForAvailability,
      reportIssueData,
      sendReport
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