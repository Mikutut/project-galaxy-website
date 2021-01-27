<template>
    <main id="applications-select-container">
        <div></div>
        <div @click="applicationTypeChosen('wl')" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/ems-bg.png')">
            <div>
                <h1>Whitelist</h1>
                <p>Chciałbyś rozpocząć swoją przygodę na serwerze? Kliknij tutaj i złóż podanie o dopisanie do whitelisty!</p>
            </div>
        </div>
        <div @click="applicationTypeChosen('fraction')" class="applications-select-option" style="background-image: url('https://cdn.mikut.dev/project-galaxy/img/crime-bg.png')">
            <div>
                <h1>Frakcja</h1>
                <p>Znudziły ci się dotychczasowe prace? Chcesz poczuć powiew świeżości? Kliknij tutaj i złóż podanie o założenie nowej frakcji!</p>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, Router } from "vue-router";

export default defineComponent({
    name: "ApplicationsSelect",
    setup() {
        const router: Router = useRouter();

        return {
            applicationTypeChosen: (type: 'wl' | 'fraction') => {
                switch(type) {
                    case 'wl':
                        router.replace({ name: 'ApplicationsWL' });
                    break;
                    case 'fraction':
                        router.replace({ name: 'ApplicationsFraction' });
                    break;
                }
            }
        };
    }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

#applications-select-container {
    min-height: 100%;
    height: auto;
    width: 100%;
    flex: 1 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;

    & > div:first-child {
        position: absolute;
        width: 350px;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        z-index: 999;
    }
}
.applications-select-option {
    width: 100%;
    height: 100%;
    flex: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;
    transition: flex-basis .3s;

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.4);
        padding: 1rem;

        & > h1 {
            font-size: 2rem;
            color: $c1;
            padding: 0.5rem;
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
        flex-flow: column nowrap;
    }
}
@media screen and (min-width: 769px) {
    .applications-select-option {
        &:hover {
            flex-basis: 75%;
        }
        &:not(:hover) {
            flex-basis: 0;
        }
    }
}
</style>