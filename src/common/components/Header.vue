<template>
  <header>
    <div class="header-container">
      <a @click.prevent="goToHome();">
        <div class="header-logo-container">
          <!-- <img class="header-logo" src="@/assets/img/logo.png" /> -->
        </div>
      </a>
      <transition name="nav-bar-switch" mode="out-in">
        <nav class="header-nav" v-if="navBarState === 'default'">
          <button @click="toggleNavBarState('gameplay')">Rozgrywka</button>
          <button @click="switchModalState('reportIssue')">Zgłoś błąd na stronie</button>
          <button @click="switchModalState('connectingToServer');" data-joinserver-btn>Dołącz na serwer</button> 
          <button @click="redirectToDiscordServer();" data-discord-btn>Discord</button>
        </nav>
        <nav class="header-nav" v-else-if="navBarState === 'gameplay'">
          <button @click="changeRoute({ name: 'Rules' })">Regulamin</button>
          <button @click="changeRoute({ name: 'Keys' })">Klawiszologia</button>
          <button @click="changeRoute({ name: 'RPHandbook' })">Słownik pojęć RP</button>
          <button @click="toggleNavBarState('default')" data-navbarstate-reset-btn>Powrót</button>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { goToHome, changeRoute } from "@/common/routeHelper";
import { goToSite } from "@/common/misc";
import { switchModalState } from "@/common/modalsManagerHelper";

type NavBarState = "default" | "gameplay" | "applications";

export default defineComponent({
  name: 'Header',
  setup() {

    const navBarState: Ref<NavBarState> = ref("default");

    return {
      navBarState,
      toggleNavBarState: (newState: NavBarState) => {
        navBarState.value = newState;
      },
      goToHome,
      changeRoute,
      redirectToDiscordServer: () => window.location.href = "https://discord.gg/Xnnj2z4vte",
      goToSite,
      switchModalState
    };
  }
})
</script>

<style lang="scss" scoped>
@import "../styles/color-palette.scss";

header {
  min-height: 100vh;
  width: 100%;
  background: no-repeat center/cover scroll;
}

.header-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  background: hsla(0, 0%, 0%, 0.3);
}
.header-logo-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-logo {
  width: 100%;
  max-width: 600px;
  transition: transform .3s;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
}
.header-nav {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  justify-self: flex-end;
  padding: 2rem;

  & > button {
    min-width: 250px;
    background: hsla(0, 0%, 0%, 0.6);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: calc(1rem + 0.5vw);
    border-radius: 8px;
    padding: 0.5rem;
    transition: transform .25s, background .25s;
    margin: 1rem;
    cursor: pointer;
    
  }
}

/* VUE TRANSITIONS */
.nav-bar-switch {
  &-enter-active, &-leave-active {
    transition: opacity .3s, transform .25s;
  }
  &-enter-from {
    transform: translateY(25px);
  }
  &-enter-to, &-leave-from {
    transform: translateY(0);
  }
  &-enter-from, &-leave-to {
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(-25px);
  }
}

@media screen and (max-width: 768px) {
  .nav-bar-switch {
    &-enter-from {
      transform: translateX(25px);
    }
    &-enter-to, &-leave-from {
      transform: translateX(0);
    }
    &-leave-to {
      transform: translateX(-25px);
    }
  }
}
/* END OF VUE TRANSITIONS */

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .header-nav {
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;

    & > button {
      width: 100%;
      margin: 0;
      border-radius: 0;

      &[data-discord-btn] {
        background: map-get($colors, "discord");
      }
      &[data-joinserver-btn] {
        background: hsla(120, 100%, 30%, 1);
      }
      &[data-navbarstate-reset-btn] {
        background: hsl(0, 100%, 50%);
      }

      &:hover {
        transform: scale(1);
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .header-nav {

    & > button {
      &:hover {
        transform: scale(1.1);
        background: map-get($colors, "c2");

        &[data-discord-btn] {
          background: map-get($colors, "discord");
        }
        &[data-joinserver-btn] {
          background: hsla(120, 100%, 30%, 1);
        }
        &[data-navbarstate-reset-btn] {
          background: hsl(0, 100%, 50%);
        }
      }
    }
  }
}
/* END OF MEDIA QUERIES */
</style>