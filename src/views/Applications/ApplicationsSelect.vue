<template>
    <div id="applications-select-container" class="scroll-to" v-if="route.params.mode === 'default'">
        <div style="width: 100%; padding: 1rem; font-size: 1.5rem; display: flex; justify-content: center; align-items: center; background: transparent; color: white;">Wybierz opcję</div>
        <main>
            <div @click="router.replace({ name: 'ApplicationsSelect', params: { mode: 'fraction' } })" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/crime-bg2.png')">
                <div>
                    <h1>Frakcja</h1>
                    <p>Znudziły ci się dotychczasowe prace? Chcesz poczuć powiew świeżości? Kliknij tutaj i złóż podanie o założenie nowej / dołączenie do frakcji!</p>
                </div>
            </div>
            <div @click="router.replace({ name: 'ApplicationsWL' })" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/wl-bg.png')">
                <div>
                    <h1>Whitelist</h1>
                    <p>Chciałbyś rozpocząć swoją przygodę na serwerze? Kliknij tutaj i złóż podanie o dopisanie do whitelisty!</p>
                </div>
            </div>
            <div @click="router.replace({ name: 'ApplicationsSupport' })" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/lesioszef.png')">
                <div>
                    <h1>Sprawa do administracji</h1>
                    <p>Masz jakąś pilną sprawę do administracji? Kliknij tutaj i złóż swoje zapytanie do administracji!</p>
                </div>
            </div>
        </main>
    </div>
    <div id="applications-select-container" class="scroll-to" v-else-if="route.params.mode === 'fraction'">
        <button class="applications-select-option-btn" @click="goBackToSelectScreen()" >Wróć do ekranu wyboru</button>
        <main>
            <div @click="router.replace({ name: 'ApplicationsLSPD' })" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/lspd-bg.png')">
                <div>
                    <h1>LSPD</h1>
                    <p>Pragniesz zostać najlepszym stróżem prawa w mieście! Kliknij tutaj i zgłoś się jako kandydat na policjanta!</p>
                </div>
            </div>
            <div @click="router.replace({ name: 'ApplicationsEMS' })" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/ems-bg.png')">
                <div>
                    <h1>EMS</h1>
                    <p>Twoim marzeniem od zawsze było ratowanie żyć innych? Kliknij tutaj i zgłoś się jako kandydat na ratownika medycznego!</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, Router, RouteLocationNormalized, useRoute } from "vue-router";
export default defineComponent({
    name: "ApplicationsSelect",
    setup() {
        const router: Router = useRouter();
        const route: RouteLocationNormalized = useRoute();
        return {
            router,
            route,
            goBackToSelectScreen: () => {
                router.replace({ name: 'ApplicationsSelect', params: { mode: "default" } });
            }
        };
    }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/ApplicationsSelectOptionBtn.scss";

#applications-select-container {
    min-height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    overflow: hidden;

    & > main {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        position: relative;
        flex: 1;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 50px;
            top: 0;
            left: 0;
            background: transparent;
        }
    }
}
.applications-select-option {
    flex: 1;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;
    transition: flex-basis .3s;

    & > div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.4);
        overflow: hidden;

        & > h1 {
            font-size: 2rem;
            color: $c1;
            letter-spacing: 0.2rem;
            text-align: center;
        }
        & > p {
            text-align: center;
            font-size: 1.2rem;
            color: white;
        }
    }
}
/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
    #applications-select-container {
        & > main {
            flex-flow: column nowrap;
        }
    }
    .applications-select-option {
        width: 100%;
    }
}
@media screen and (min-width: 769px) {
    .applications-select-option {
        &:hover {
            flex-basis: 100%;
        }
        &:not(:hover) {
            flex-basis: 0;
        }
    }
}
</style>