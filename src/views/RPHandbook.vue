<template>
  <div class="view-wrapper">
    <Header />
    <main data-auto-scroll-to>
      <h1 class="main-title">Słownik pojęć RP</h1>
      <ul class="definitions-list">
        <li>
          <span class="definition-title">IC (In Character)</span>
          <p class="definition-description">Świat, w którym żyje nasza postać; kontent dot. bezpośrednio rozgrywki</p>
        </li>
        <li>
          <span class="definition-title">OOC (Out of Character)</span>
          <p class="definition-description">Świat, w którym żyjemy my; wszystko, co niezwiązane jest z rozgrywką.</p>
        </li>
        <li>
          <span class="definition-title">PG (Power Gaming)</span>
          <p class="definition-description">
            Definiuje się to jako zmuszanie kogoś do akcji RP.
            <br />
            <br />
            Przykład:
            <br />
            /me uderza Jacka tak mocno, że traci on przytomność.</p>
        </li>
        <li>
          <span class="definition-title">BW (Brutally Wounded)</span>
          <p class="definition-description">
            Wprowadzenie postaci w stan nieprzytomności wskutek odniesionych obrażeń.
          </p>
        </li>
        <li>
          <span class="definition-title">VDM (Vehicle Deathmatch)</span>
          <p class="definition-description">
            Jest to rozjeżdżanie przypadkowych osób, które prowadzi do BW.
          </p>
        </li>
        <li>
          <span class="definition-title">RDM (Random Deathmatch)</span>
          <p class="definition-description">
            Jest to strzelanie do przypadkowych osób, które prowadzi do BW.
          </p>
        </li>
        <li>
          <span class="definition-title">CN (Celebrity Name)</span>
          <p class="definition-description">
            Imię i nazwisko postaci na podstawie imienia znanej osoby, np. Pablo Escobar, Barack Obama, etc.
          </p>
        </li>
        <li>
          <span class="definition-title">BH (Bunny Hop)</span>
          <p class="definition-description">
            Bugowanie animacji skakania w celu szybszego przemieszczania się.
          </p>
        </li>
        <li>
          <span class="definition-title">CB (Cop Baiting)</span>
          <p class="definition-description">
            Prowokowanie policji, bez większego celu.
          </p>
        </li>
        <li>
          <span class="definition-title">CL (Combat Log)</span>
          <p class="definition-description">
            Wyjście z gry podczas akcji RP. 
            <br />
            <br />
            Przykład: 
            <br />
            Ściga Cię policja, więc robisz ALT+F4 w celu uniknięcia odpowiedzialności.
          </p>
        </li>
        <li>
          <span class="definition-title">RK (Revenge Kill)</span>
          <p class="definition-description">
            Nieuzasadniona zemsta po wyjściu ze szpitala na graczu, który doprowadził Cię do BW.
          </p>
        </li>
        <li>
          <span class="definition-title">FearRP - Zasada poszanowania życia</span>
          <p class="definition-description">
            Zasada, mówiąca o szacunku do życia swojej postaci i nie narażanie jej na sytuacje, w których mogłaby zginąć.
            <br />
            <br />
            Przykłady:
            <br />
            Obraza kilku uzbrojonych osób,
            <br />
            Taranowanie ciężkich pojazdów typu ciężarówka zwykłym samochodem osobowym
          </p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Header from "@/common/components/Header.vue";
import { manageAutoScroll } from "@/common/scrollManager";

export default defineComponent({
  name: 'RPHandbookView',
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
@import "../common/styles/color-palette.scss";

main {
  width: 100%;
  min-height: 100vh;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
  background: map-get($colors, "c3");
}

.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 8vh;
  padding: 0.25rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  width: 100%;
  overflow: hidden;
  word-break: break-word;
}

/* .sections-list {
  width: 100%;
  flex: 1 0;
  list-style-type: none;
  list-style-position: inside;
  counter-reset: section-count;

  & > li {
    counter-increment: section-count;
    margin: 2rem 0 0;
    border-bottom: 1px dashed black;
  }
} */
/* .section-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & > .section-title {
    font-size: 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

     &::before {
      content: counter(section-count);
      display: block;
      width: 100px;
      height: 100px;
      font-size: 2.5rem;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      text-align: center;
      margin-right: 1.5rem; 
      border-radius: 20px;
    } 
  }
} */
.definitions-list {
  width: 100%;
  list-style-type: none;
  list-style-position: inside;
  margin: 1rem 0 0;

  & > li {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 1rem 0;
    padding: 2rem;

    &:not(:last-child) {
      border-bottom: 1px dashed black;
    }
  }
}
.definition-title {
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  text-align: center;
}
.definition-description {
  font-size: 1rem;
  color: white;
  text-align: center;
  width: 75%;
  flex: 1;
  white-space: pre-line;
}
</style>