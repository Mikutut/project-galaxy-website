<template>
  <div class="view-wrapper">
    <Header />
    <main data-auto-scroll-to>
      <div class="applications-select-wrapper">
        <h1>Wybierz rodzaj zgłoszenia</h1>
        <!-- <transition name="applications-select-choices-wrapper-fade"> -->
          <section class="applications-select-choices-wrapper" v-if="choiceWrapperMode === 'main'">
            <article class="applications-select-choice-container" data-choice="fractions">
              <div class="applications-select-choice-inner-container">
                <h1>Szukasz pracy?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Morbi ultrices commodo diam, quis facilisis sem finibus id.
                  <br />
                  Nullam eu imperdiet justo, in varius sapien. In quis eleifend ipsum. 
                  <br />
                  Fusce tristique sodales sem, eu consequat massa mattis quis. 
                  <br />
                  Donec condimentum elementum ante, at pharetra nisi varius non. 
                  <br />
                  Donec molestie consequat quam, eget auctor ante hendrerit a. 
                  <br />
                  Donec sit amet tellus sed magna hendrerit volutpat. 
                  <br />
                  Suspendisse justo massa, sodales in tempor a, placerat non nulla.
                </p>
              </div>
            </article>
          </section> 
        <!-- </transition> -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { manageAutoScroll } from "@/common/scrollManager";
import Header from "@/common/components/Header.vue";

type ChoiceWrapperMode = "main" | "fractions";

export default defineComponent({
  name: 'ApplicationsSelectView',
  components: {
    Header
  },
  setup() {
    const choiceWrapperMode: Ref<ChoiceWrapperMode> = ref("main");

    onMounted(() => manageAutoScroll());

    return {
      choiceWrapperMode,
      changeChoiceWrapperMode: (mode: ChoiceWrapperMode) => choiceWrapperMode.value = mode
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../../../common/styles/color-palette.scss";

$backgrounds: (
  "fractions": url("../../../assets/img/crime-bg2.png") 
);

main {
  flex: 1 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
}

.applications-select-wrapper {
  min-height: 100vh;
  flex: 1 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > h1 {
    font-size: 5vh;
    color: white;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
.applications-select-choices-wrapper {
  width: 100%;
  flex: 1 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.applications-select-choice-container {
  min-height: 500px;
  height: 100%;
  width: 100%;
  flex: 1 0;
  background: no-repeat center/cover scroll;

  &[data-choice="fractions"] {
    background-image: map-get($backgrounds, "fractions");
  }
}
.applications-select-choice-inner-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: hsla(0, 0%, 0%, 0.4);
  transition: background .3s;

  & > h1 {
    font-size: 3.5vh;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.1vmin;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > p {
    display: block;
    text-align: center;
    width: 75%;
    color: white;
    font-size: 2vh;
  }

  &:hover, &:focus-within {
    background: hsla(0, 0%, 0%, 0.8);
  }
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .applications-select-choice-inner-container {
    background: hsla(0, 0%, 0%, 0.8);
  }
}
/* END OF MEDIA QUERIES */
</style>