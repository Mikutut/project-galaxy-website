<template>
    <main id="applications-wl-container">
        <div>
            <button class="applications-select-option-btn" @click="goBackToSelectScreen()">Wróć do ekranu wyboru</button>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Router, useRouter } from "vue-router";

export default defineComponent({
    name: 'ApplicationsWL',
    setup() {
        const router: Router = useRouter();

        return {
            goBackToSelectScreen: () => {
                router.replace({ name: 'ApplicationsSelect' });
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../../styles/ApplicationsSelectOptionBtn.scss";
@import "../../styles/variables.scss";

#applications-wl-container {
    width: 100%;
    min-height: 100%;
    height: auto;
    flex: 1 0;
    background: url("https://cdn.mikut.dev/project-galaxy/img/ems-bg.png"); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
    background-attachment: scroll;

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        background: rgba(0, 0, 0, 0.4);
    }
}
</style>