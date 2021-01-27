<template>
    <footer>
        <a href="https://mikut.dev">
            <img src="https://cdn.mikut.dev/mikut/img/icon.png" />
        </a>
        <p>2020 - 2021</p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer'
});
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 1);

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2rem;
        & > img {
            height: 40px;
        }
    }
    & > p {
        color: rgba(150, 150, 150, 1);
        font-family: monospace;
        font-size: 0.8rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: 2rem;
    }
}
</style>