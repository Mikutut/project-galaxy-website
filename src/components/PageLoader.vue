<template>
    <transition name="page-loader-fade">
        <div id="page-loader" v-if="!isLoaded">
            <img src="https://cdn.mikut.dev/project-galaxy/img/logo-437x437.png" />
            <h1>Ładowanie...</h1>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
    name: 'PageLoader',
    setup() {
        const isLoaded: Ref<boolean> = ref(false);
        document.addEventListener("readystatechange", () => {
            if(document.readyState === "complete") isLoaded.value = true;
        })

        return { isLoaded };
    }
})
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

@keyframes anim1 {
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
}

#page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    & > h1 {
        color: $c2;
        font-size: 1rem;
        padding: 1rem;
        text-align: center;
        letter-spacing: 0.25rem;
    }

    & > h1, & > img {
        animation: anim1 2s alternate infinite ease;
    }
}

.page-loader-fade-enter-active, .page-loader-fade-leave-active {
    transition: opacity .5s;
}
.page-loader-fade-enter-from, .page-loader-fade-leave-to {
    opacity: 0;
}
</style>