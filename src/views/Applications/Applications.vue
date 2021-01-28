<template>
    <Header />
    <transition name="fade" mode="out-in">
        <router-view />
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