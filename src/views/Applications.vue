<template>
    <div class="view-wrapper">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
    name: 'Applications',
    components: {
        Header, Footer
    }
})
</script>