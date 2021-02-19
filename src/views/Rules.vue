<template>
  <div class="view-wrapper">
    <Header />
    <main data-auto-scroll-to>
      <h1 class="main-title">Regulamin</h1>
      <ul class="sections-list">
        <li>
          <header class="section-header">
            <h1 class="section-title">Zasady ogólne</h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li>
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li> 
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li>
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li> 
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li> 
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li>
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li> 
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
            </li>
          </ul>
        </li>
        <li>
          <header class="section-header">
            <h1 class="section-title"></h1>
          </header>
          <ul class="section-rules-list">
            <li>
              <div class="rule-counter"></div>
              <p class="rule-description"></p>
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
  name: 'RulesView',
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
  font-size: 10vmin;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    border-bottom: 1px dashed black;
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
}
.section-rules-list {
  width: 100%;
  list-style-type: none;
  list-style-position: inside;
  margin: 2rem 0 1rem;

  & > li {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    counter-reset: rule-count;

    &:not(:first-child) > .rule-counter::before {
      counter-increment: rule-count;
    }
  }
}
.rule-counter {
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  text-align: center;

  &::before {
    content: counter(section-count) "." counter(rule-count);
  }
}
.rule-description {
  font-size: 1rem;
  color: white;
  text-align: center;
  width: 75%;
  flex: 1;
}
</style>