<template>
    <div title="Przewiń do góry" id="scroll-to-top-btn" class="hidden">
        <i class="fas fa-arrow-up"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
    name: "ScrollToTop",
    setup() {

        let int: number;
        const scrollDetection = () => {
            int = setInterval(() => {
                document.getElementById("app").addEventListener("scroll", () => {
                        if(document.getElementsByClassName('scroll-to').length > 0) {
                            if(document.getElementById("app").scrollTop > (document.getElementsByClassName('scroll-to')[0] as HTMLElement).offsetTop) {
                                if(document.getElementById("scroll-to-top-btn").classList.contains("hidden")) document.getElementById("scroll-to-top-btn").classList.remove("hidden");
                            } else {
                                if(!document.getElementById("scroll-to-top-btn").classList.contains("hidden")) document.getElementById("scroll-to-top-btn").classList.add("hidden");
                            }
                        }
                    });
            }, 1000);
            document.getElementById("scroll-to-top-btn").addEventListener("click", (ev: Event) => {
                ev.preventDefault();
                document.getElementById("app").scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            });
        }

        onMounted(scrollDetection);  
        onBeforeUnmount(() => {
            clearInterval(int);
        })

        return {
            scrollDetection
        };
    }
})
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

#scroll-to-top-btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
    background: black;
    color: $c3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform .2s;

    &.hidden {
        transform: scale(0);
    }
}
</style>