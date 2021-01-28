<template>
    <Header />
    <main class="scroll-to">
        <h1 id="rules-list-title">Regulamin</h1>
        <ol>
            <li>
                <div>
                    <div class="rules-list-counter"></div>
                    <h2 class="rules-title">Tytuł</h2>
                </div>
                <p class="rules-description">Opis</p> 
            </li>
            <li>
                <div>
                    <div class="rules-list-counter"></div>
                    <h2 class="rules-title">Tytuł</h2>
                </div>
                <p class="rules-description">Opis</p> 
            </li>
            <li>
                <div>
                    <div class="rules-list-counter"></div>
                    <h2 class="rules-title">Tytuł</h2>
                </div>
                <p class="rules-description">Opis</p> 
            </li>
            <li>
                <div>
                    <div class="rules-list-counter"></div>
                    <h2 class="rules-title">Tytuł</h2>
                </div>
                <p class="rules-description">Opis</p> 
            </li>
            <li>
                <div>
                    <div class="rules-list-counter"></div>
                    <h2 class="rules-title">Tytuł</h2>
                </div>
                <p class="rules-description">Opis</p> 
            </li>
            <li>
                <div>
                    <div class="rules-list-counter"></div>
                    <h2 class="rules-title">Lesio</h2>
                </div>
                <p class="rules-description">Szef</p> 
            </li>
        </ol>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";

export default defineComponent({
    name: 'Rules',
    components: {
        Header
    }
})
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
main {
    counter-reset: paragraph;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: $c3;
    padding: 0.5rem;
    flex: 1;
    & > h1 {
        font-size: 4rem;
        letter-spacing: 0.5rem;
    }
    & > ol {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 2rem;
        & > li {
            counter-increment: paragraph;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            border-bottom: 2px dashed black;
            &:last-child {
                border-bottom: none;
            }
            & > div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                & > .rules-list-counter {
                    font-size: 2.5rem;
                    color: white;
                    background: black;
                    padding: 1rem;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &::after {
                        content: counter(paragraph);
                    }
                }
                & > .rules-title {
                    font-size: 2rem;
                    margin: 0.5rem 0;
                    color: black;
                    font-weight: bold;
                    user-select: text;
                    padding: 1rem;
                    text-align: center;
                }
            }
            & > .rules-description {
                font-size: 1.2rem;
                color: black;
                width: 50%;
                text-align: center;
                padding: 0.5rem;
                user-select: text;
                margin-bottom: 0.5rem;
            }
        }
    }
}
/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
    main {
        & > h1 {
            font-size: 2rem;
        }
    }
}
</style>