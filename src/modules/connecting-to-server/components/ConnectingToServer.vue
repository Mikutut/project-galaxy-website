<template>
  <main>
    <div class="connecting-to-server" v-if="connectionState === 'connecting'">
      <h1>Uruchamianie klienta FiveM...</h1>
    </div>
    <div class="connection-timeout" v-else-if="connectionState === 'timeout'">
      <h1>Klient FiveM powinien być już uruchomiony!</h1>
      <h2>Jeśli tak nie jest, kliknij przycisk poniżej, aby ponowić próbę.</h2>
      <button @click="retryConnection();">Ponów</button>
      <button @click="goToSite('https://fivem.net', true)">Oficjalna strona FiveM</button>
      <button @click="hideModal();">Ukryj to okno</button>
    </div>
    <div class="connection-device-not-supported" v-else-if="connectionState === 'device-not-supported'">
      <h1>Twoje urządzenie wydaje się nie wspierać klienta FiveM!</h1>
      <h2>Jeśli uważasz, że nastąpiła pomyłka, wciśnij przycisk poniżej, aby wymusić uruchomienie klienta</h2>
      <button @click="retryConnection(true);">Wymuś uruchomienie klienta</button>
      <button @click="hideModal();">Ukryj to okno</button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from "vue";
import { goToSite, isDeviceMobile } from "@/common/misc";
import { switchModalState } from "@/common/modalsManagerHelper";

export default defineComponent({
  name: 'ConnectingToServerModal',
  setup() {

    const connectionState: Ref<"connecting" | "timeout" | "device-not-supported"> = ref("connecting");
    const retryConnection = (force = false) => {
      if(!isDeviceMobile || force) {
        connectionState.value = "connecting";
        goToSite("fivem://connect/http://project-galaxy.org:30120");
        setTimeout(() => connectionState.value = "timeout", 10000);
      } else {
        connectionState.value = "device-not-supported";
      }
    };

    onMounted(() => retryConnection());

    return {
      connectionState,
      retryConnection,
      hideModal: () => {
        switchModalState("connectingToServer");
      },
      goToSite
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
}

.connecting-to-server {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h1 {
    color: white;
    text-align: center;
    font-size: 6vh;
  }
}
.connection-timeout, .connection-device-not-supported {
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
    font-size: 4vh;
  }
  & > h2 {
    font-size: 3vh;
  }
  & > button {
    width: 80%;
    padding: 0.25rem;
    border: 1px solid transparent;
    background: transparent;
    color: white;
    font-size: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.25rem 0;
    cursor: pointer;
  }
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .connection-timeout, .connection-device-not-supported {

    & > button {
      border-color: white;
    }
  }
}
@media screen and (min-width: 769px) {
  .connection-timeout, .connection-device-not-supported {

    & > button {
      transition: border-color .25s;

      &:hover {
        border-color: white;
      }
    }
  }
}
/* END OF MEDIA QUERIES */
</style>