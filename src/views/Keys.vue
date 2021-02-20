<template>
  <div class="view-wrapper">
    <Header />
    <main data-auto-scroll-to>
      <h1 class="main-title">Klawiszologia</h1>
      <ul class="sections-list">
        <li>
          <header class="section-header">
            <h1 class="section-title">Klawiszologia ogólna</h1>
          </header>
          <ul class="section-keys-list">
            <li>
              <span class="key-bind">F1</span>
              <p class="key-description">Telefon</p>
            </li>
            <li>
              <span class="key-bind">F2</span>
              <p class="key-description">Ekwipunek</p>
            </li>
            <li>
              <span class="key-bind">F3</span>
              <p class="key-description">Animacje</p>
            </li>
            <li>
              <span class="key-bind">F6</span>
              <p class="key-description">Menu pracy</p>
            </li>
            <li>
              <span class="key-bind">F7</span>
              <p class="key-description">Faktury</p>
            </li>
            <li>
              <span class="key-bind">H</span>
              <p class="key-description">Zmiana głosu</p>
            </li>
            <li>
              <span class="key-bind">Z</span>
              <p class="key-description">Rozmowa na radiu</p>
            </li>
            <li>
              <span class="key-bind">Caps Lock</span>
              <p class="key-description">Tempomat</p>
            </li>
            <li>
              <span class="key-bind">~ (tylda)</span>
              <p class="key-description">Włączanie / wyłączanie silnika w pojeździe</p>
            </li>
            <li>
              <span class="key-bind">U</span>
              <p class="key-description">Klucze od pojazdu</p>
            </li>
            <li>
              <span class="key-bind">G</span>
              <p class="key-description">Siadanie na krześle</p>
            </li>
            <li>
              <span class="key-bind">K</span>
              <p class="key-description">Pasy</p>
            </li>
            <li>
              <span class="key-bind">M</span>
              <p class="key-description">Lista obywateli</p>
            </li>
            <li>
              <span class="key-bind">X</span>
              <p class="key-description">Podnoszenie / opuszczanie rąk</p>
            </li>
            <li>
              <span class="key-bind">- / +</span>
              <p class="key-description">Kierunkowskazy (lewy / prawy)</p>
            </li>
            <li>
              <span class="key-bind">Backspace</span>
              <p class="key-description">Światła awaryjne</p>
            </li>
          </ul>
        </li>
        <li>
          <header class="section-header">
            <h1 class="section-title">Klawiszologia frakcyjna</h1>
          </header>
          <ul class="section-keys-list">
            <li>
              <span class="key-bind">Q</span>
              <p class="key-description">Sygnały świetlne (pot. "bomby")</p>
            </li>
            <li>
              <span class="key-bind">Alt</span>
              <p class="key-description">Sygnały dźwiękowe</p>
            </li>
            <li>
              <span class="key-bind">, / . (przecinek / kropka)</span>
              <p class="key-description">Przełączanie rodzaju sygnałów dźwiękowych</p>
            </li>
            <li>
              <span class="key-bind">^ (Lewy Shift + 6)</span>
              <p class="key-description">Duale</p>
            </li>
            <li>
              <span class="key-bind">Alt + E</span>
              <p class="key-description">Zakuwanie drugiej osoby</p>
            </li>
            <li>
              <span class="key-bind">Alt + W</span>
              <p class="key-description">Przenoszenie drugiej postaci z miejsca na miejsce</p>
            </li>
          </ul>
        </li> 
        <li>
          <header class="section-header">
            <h1 class="section-title">Lista komend</h1>
          </header>
          <ul class="section-keys-list">
            <li>
              <span class="key-bind">/praca</span>
              <p class="key-description">Zmiana pracy</p>
            </li>
            <li>
              <span class="key-bind">/twt</span>
              <p class="key-description">Twitter</p>
            </li>
            <li>
              <span class="key-bind">/dw</span>
              <p class="key-description">Darkweb</p>
            </li>
            <li>
              <span class="key-bind">/dm [id]</span>
              <p class="key-description">Wiadomość prywatna</p>
            </li>
            <li>
              <span class="key-bind">/dowod</span>
              <p class="key-description">Pokazanie dowodu osobistego</p>
            </li>
            <li>
              <span class="key-bind">/wizytowka</span>
              <p class="key-description">Pokazanie wizytówki</p>
            </li>
            <li>
              <span class="key-bind">/odznaka</span>
              <p class="key-description">Pokazanie odznaki/legitymacji</p>
            </li>
            <li>
              <span class="key-bind">/zglos</span>
              <p class="key-description">Zgłoszenie problemu do administracji</p>
            </li>
            <li>
              <span class="key-bind">/dealer</span>
              <p class="key-description">Handlowanie narkotykami</p>
            </li>
            <li>
              <span class="key-bind">/me</span>
              <p class="key-description">Opisanie czynności wykonywanej przez postać IC</p>
            </li>
            <li>
              <span class="key-bind">/do</span>
              <p class="key-description">Opisanie otoczenia wokół postaci IC</p>
            </li>
            <li>
              <span class="key-bind">/try</span>
              <p class="key-description">Próba wykonania czynności (tak / nie)</p>
            </li>
          </ul>
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
  name: 'KeysView',
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
  align-items: center;
  background: map-get($colors, "c3");
}

.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 8vmin;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  width: 100%;
  overflow: hidden;
  word-break: break-word;
}

.sections-list {
  width: 100%;
  flex: 1 0;
  list-style-type: none;
  list-style-position: inside;
  counter-reset: section-count;

  & > li {
    counter-increment: section-count;
    margin: 2rem 0 0;

    &:not(:last-child) {
      border-bottom: 1px dashed black;
    }
  }
}
.section-header {
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

/*     &::before {
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
    } */
  }
}
.section-keys-list {
  width: 100%;
  list-style-type: none;
  list-style-position: inside;
  margin: 2rem 0 1rem;

  & > li {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 0.5rem 0;
  }
}
.key-bind {
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  text-align: center;
}
.key-description {
  font-size: 1rem;
  color: white;
  text-align: center;
  width: 75%;
  flex: 1;
}
</style>