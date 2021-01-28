<template>
    <div id="error-wrapper">
        <div id="error-text">
            <span id="error-title-1">404</span>
            <span id="error-title-2">Strony nie znaleziono</span>
            <button @click.prevent="router.replace({ name: 'Home' })">Powrót do strony głównej</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Router, useRouter } from 'vue-router'

export default defineComponent({
    name: 'Error404',
    setup () {
        const router: Router = useRouter()
        return { router }
    }
});
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

@keyframes bgAnim {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
#error-wrapper {
    width: 100%;
    height: 100%;
    flex: 1 0;
    background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(185,0,0,1) 100%);
    background-size: 200% 200%;
    animation: bgAnim 16s alternate infinite ease;
}
#error-text {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    & > button {
        padding: 0.5rem;
        background: transparent;
        color: white;
        font-size: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 2rem;
        transition: background .2s, border .2s;
        text-align: center;

        &:hover {
            background: rgba(60, 60, 60, 1);
            border: 1px solid transparent;
        }
    }
}
#error-title-1 {
    font-size: 8rem;
}
#error-title-2 {
    font-size: 4rem;
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
    #error-title-1 {
        font-size: 4rem;
    }
    #error-title-2 {
        font-size: 2rem;
    }
    #error-text {
        & > button {
            font-size: 1rem;
            background: rgba(60, 60, 60, 1);
            border: 1px solid transparent;
        }
    }
}
</style>
