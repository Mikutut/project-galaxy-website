<template>
    <div class="view-wrapper">
        <Header />
        <transition name="route-change-fade" mode="out-in">
            <router-view />
        </transition>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default defineComponent({
    name: 'Applications',
    components: {
        Header, Footer
    }
})
</script>