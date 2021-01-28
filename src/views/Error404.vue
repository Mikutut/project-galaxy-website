<template>
    <div>404</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Router, useRouter } from "vue-router";

export default defineComponent({
    name: 'Error404',
    setup() {
        const router: Router = useRouter();

        return {
            router
        };
    }
});
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

</style>