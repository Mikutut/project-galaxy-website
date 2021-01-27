<template>
    <header>
        <div>
            <a href="#" @click.prevent="router.replace({ name: 'Home' })">
                <img src='https://cdn.mikut.dev/project-galaxy/img/logo-437x437.png' />
            </a>
            <nav>
                <button @click="goToTab('Rules')">Regulamin</button>
                <button @click="goToTab('ApplicationsSelect', { mode: 'default' })">Aplikacje</button>
                <button data-discord @click="goToSite('https://discord.gg/Xnnj2z4vte')">Discord</button>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Router, useRouter } from "vue-router";

export default defineComponent({
    name: 'Header',
    setup() {
        const router: Router = useRouter();
        return {
            router,
            goToTab: (pathName: string, params?: Record<string, any>) => {
                router.replace({ name: pathName, params: params });
            },
            goToSite: (url: string) => {
                window.location.href = url;
            }
        };
    }
})
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

header {
    min-height: 100%;
    width: 100%;
    background: url("https://cdn.mikut.dev/project-galaxy/img/header-bg2.png"); 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: scroll;
    background-position: center;
    flex: 1 0;

    & > div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.3);
    }
}
nav {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    & > button {
        min-width: 150px;
        background: none;
        padding: 0.5rem;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 8px;
        transition: color .2s, background .2s, transform .2s;
        cursor: pointer;
    }
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
    nav {
        height: 100%;
        width: 100%;
        flex-flow: column nowrap;
        justify-content: center;
        margin-top: 0;
        margin-bottom: 1rem;
        & > button {
            width: 100%;
            margin: 0.25rem 0;
            &:hover {
                text-shadow: none;
                color: white;
                background: $c3;
                &[data-discord] {
                    background: #7289da;
                    color: white;
                }
            }
        }
    }
}
@media screen and (min-width: 769px) {
    nav > button {
        &:hover {
            text-shadow: none;
            color: white;
            background: $c3;
            transform: translateY(-10px);
            &[data-discord] {
                background: #7289da;
                color: white;
            }
        }
    }
}
</style>