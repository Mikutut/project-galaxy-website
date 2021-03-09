<template>
  <div class="view-wrapper">
    <main>
      <div class="e404-container">
        <h1>Błąd 404</h1>
        <p>Strony nie znaleziono</p>
        <button @click="changeRoute({ name: 'Home' })">Powrót do strony głównej</button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { changeRoute } from "@/common/routeHelper"

export default defineComponent({
  name: 'Error404View',
  setup() {
    return {
      changeRoute
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../common/styles/color-palette.scss";

main {
  width: 100%;
  flex: 1 0;
  background: no-repeat center/cover scroll url("../assets/img/crime-bg3.png");
}

.e404-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 0%, 0.6);

  & > h1 {
    font-size: calc(1rem + 4vw);
    color: red;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    width: 100%;
  }
  & > p {
    font-size: calc(1rem + 2vw);
    color: white;
    text-align: center;
    width: 100%;
  }
  & > button {
    width: 50%;
    font-size: calc(1rem + 1vw);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.25rem;
    background: transparent;
    border: 1px solid white;
    margin: 2rem 0;
    cursor: pointer;
  }
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .e404-container {

    & > button {
      background: red;
    }
  }
}
@media screen and (min-width: 769px) {
  .e404-container {

    & > button {
      transition: background .3s;

      &:hover {
        background: red;
      }
    }
  }
}
/* END OF MEDIA QUERIES */
</style>