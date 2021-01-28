<template>
    <Header />
    <transition name="route-change-fade" mode="out-in">
        <div id="applications-view-wrapper" class="scroll-to">
            <router-view />
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../../components/Header.vue";

export default defineComponent({
    name: 'Applications',
    components: {
        Header
    }
})
</script>

<style lang="scss" scoped>
#applications-view-wrapper {
    width: 100%;
    height: 100%;
    flex: 1 0;
    overflow: hidden;
}
</style>