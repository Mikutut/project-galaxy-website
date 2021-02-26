<template>
  <div class="view-wrapper">
    <Header />
    <main data-auto-scroll-to :data-application-type="route.params.type">
      <button class="applications-form-back-btn" @click="goBack()">Wróć do ekranu poprzedniego</button>
      <section class="applications-form-outer-wrapper" v-if="appStatus === 'ready'">
        <section class="applications-form-wrapper" v-if="route.params.type === 'fractions-lspd'">
          <div>

          </div>
        </section>
        <section class="applications-form-wrapper" v-else>
          <div>
            <h1>Wystąpił błąd przy ładowaniu formularza</h1>
            <h2>Naciśnij przycisk powyżej, a następnie jeszcze raz wybierz rodzaj formularza.</h2>
          </div>
        </section>
      </section>
      <section class="applications-form-outer-wrapper" v-else-if="appStatus === 'sending'">
        <div>
          <h1>Wysyłanie zgłoszenia...</h1>
          <h2>Prosimy o cierpliwość</h2>
        </div>
      </section>
      <section class="applications-form-outer-wrapper" v-else-if="appStatus === 'sent'">
        <div>
          <!-- ZAIMPLEMENTOWAĆ TOKENY DO SPRAWDZANIA STANU ZGŁOSZEŃ -->
          <h1>Zgłoszenie zostało pomyślnie wysłane!</h1>
          <h2>Można już bezpiecznie opuścić tą stronę</h2>
        </div>
      </section> 
      <section class="applications-form-outer-wrapper" v-else-if="appStatus === 'send-error'">
        <div>
          <h1>Wystąpił błąd przy wysyłaniu zgłoszenia!</h1>
          <h2>Naciśnij przycisk powyżej, wybierz ten sam rodzaj zgłoszenia i spróbuj wysłać zgłoszenie jeszcze raz!</h2>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, Ref } from "vue";
import Header from "@/common/components/Header.vue";
import { manageAutoScroll } from "@/common/scrollManager";
import { useRoute } from "vue-router";
import { FormData, ApplicationStatus } from "../common/formHelper";
import { changeRoute } from "@/common/routeHelper"; 

export default defineComponent({
  name: 'ApplicationsFormView',
  components: {
    Header
  },
  setup() {
    const route = useRoute();

    const appStatus: Ref<ApplicationStatus> = ref("ready");
    const formTypes = reactive({
      'fractions-lspd': {
        type: 'fractions-lspd',
        fields: {
          oocName: "",
          oocAge: "",
          gameplayLength: "",
          LSPDExperience: "",
          RPExperience: "",
          icFullName: "",
          icAge: "",
          icApplicationReason: ""
        },
        onSend: (fD: FormData) => null
      }
    });

    console.log(route.params);

    onMounted(() => manageAutoScroll(false, 0));

    return {
      route,
      appStatus,
      formTypes,
      goBack: () => changeRoute({
        name: 'Applications'
      })
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../../../common/styles/color-palette.scss";

$applications-backgrounds: (
  "fractions": url("../../../assets/img/crime-bg2.png"),
  "fractions-lspd": url("../../../assets/img/lspd-bg.png"),
  "fractions-ems": url("../../../assets/img/ems-bg.png")
);

main {
  width: 100%;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
  background: no-repeat center/cover scroll;
  background-color: hsl(0, 0%, 20%);

  &[data-application-type="fractions-lspd"] {
    background-image: map-get($applications-backgrounds, "fractions-lspd");
  }
}

.applications-form-back-btn {
  width: 100%;
  padding: 0.25rem;
  font-size: 3vh;
  color: white;
  text-align: center;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background .3s;
  background: black;

  &:hover {
    background: red;
  }
}
.applications-form-outer-wrapper {
  width: 100%;
  min-height: 100vh;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
  background: transparent;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    background: hsla(0, 0%, 0%, 0.4);
    align-items: center;
    justify-content: center;
    color: white;

    & > h1 {
      font-size: 4vh;
      text-align: center;
    }
    & > h2 {
      font-size: 2vh;
      text-align: center;
    } 
  }
}
.applications-form-wrapper {
  width: 100%;
  flex: 1 0;
  background: transparent;
  
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    background: hsla(0, 0%, 0%, 0.4);
    align-items: center;
    justify-content: center;
    color: white;

    & > h1 {
      font-size: 4vh;
      text-align: center;
    }
    & > h2 {
      font-size: 2vh;
      text-align: center;
    }
  }
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .applications-form-back-btn {
    background: red;
  }
}
/* END OF MEDIA QUERIES */
</style>