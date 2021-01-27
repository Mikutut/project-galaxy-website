<template>
    <div class="view-wrapper">
        <Header />
        <main>
            <section class="home-section">
                <div>
                    <h1>Tytuł 1</h1>
                    <p>Opis</p>
                </div>
            </section>
            <section class="home-section">
                <div>
                    <h1>Tytuł 2</h1>
                    <p>Opis</p>
                </div>
            </section>
            <section class="home-section">
                <div>
                    <h1>Tytuł 3</h1>
                    <p>Opis</p>
                </div>
            </section>
            <section class="home-discord-banner">
                <div>
                    <h1>Dołącz do naszego Discorda!</h1>
                    <h2>Jest nas już <span class="home-discord-banner-members-count">{{ discordMembersCount }}</span>!</h2>
                    <h3><span class="home-discord-banner-members-count">{{ discordMembersActiveCount }}</span> z nas jest obecnie online!</h3>
                    <button @click="goToSite('https://discord.gg/Xnnj2z4vte')">Dołącz już teraz!</button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { Router, useRouter } from "vue-router";
import axios, { AxiosResponse } from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
    name: 'Home',
    components: {
        Header,
        Footer
    },
    setup() {
        const router: Router = useRouter();
        const discordMembersCount: Ref<number> = ref(0); 
        const discordMembersActiveCount: Ref<number> = ref(0);
        let discordFetchInterval = 0;

        onBeforeMount(() => {
            discordFetchInterval = setInterval(async () => {
            axios({
                method: "get",
                url: "https://discord.com/api/guilds/770654187418812427/widget.json",
            })
                .then((res: AxiosResponse<unknown>) => {
                    discordMembersCount.value = JSON.parse(res.request.responseText).members.length; 
                    discordMembersActiveCount.value = JSON.parse(res.request.responseText).members.filter((mem: Record<string, unknown>) => mem.status === "online").length;
                })
                .catch(() => {
                    discordMembersCount.value = 0;
                    discordMembersActiveCount.value = 0;
                });
            }, 5000);
        });

        onBeforeUnmount(() => {
            clearInterval(discordFetchInterval);
        });

        return {
            router,
            discordMembersCount,
            discordMembersActiveCount,
            goToSite: (url: string) => {
                window.location.href = url;
            }
        };
    }
})
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/anims.scss";

main {
    height: auto;
    width: 100%;
    flex: 1 0;
    background: transparent;
}
.home-section {
    color: white;
    background-attachment: scroll;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;

    &:nth-child(1) {
        background-image: url("https://cdn.mikut.dev/project-galaxy/img/crime-bg.png");
    }
    &:nth-child(2) {
        background-image: url("https://cdn.mikut.dev/project-galaxy/img/lspd-bg.png");
    }
    &:nth-child(3) {
        background-image: url("https://cdn.mikut.dev/project-galaxy/img/ems-bg.png");
    }

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10rem;
        background: rgba(0, 0, 0, 0.3);
        transition: background .2s;

        &:hover {
            background: rgba(0, 0, 0, 0.6);
        }

        & > h1 {
            color: $c1;
            font-size: 2rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: 0.2rem;
            padding: 1rem;
        }
        & > p {
            color: white;
            font-size: 1rem;
            text-align: center;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
        }
    }
}
.home-discord-banner {
    width: 100%;
    background: linear-gradient(180deg, rgba(114,137,218,1) 0%, rgba(8,94,150,1) 100%);
    background-size: 200% 200%;
    animation: bgAnim 16s ease alternate infinite;
    flex: 1 0;

    & > div {
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;

        text-shadow: 1px 1px 1px black, -1px 1px 1px black, 1px -1px 1px black, -1px -1px 1px black;

        & > h1 {
            font-size: 2rem;
            color: $c2;
        }
        & > h2, & > h3 {
            color: white; 
        }
        & > h2 {
            font-size: 1.5rem;
        }
        & > h3 {
            font-size: 1.2rem;
        }
        & > button {
            width: 75%;
            padding: 0.5rem;
            color: white;
            background: transparent;
            font-size: 1.5rem;
            border: 1px solid white;
            border-radius: 8px;
            margin: 1rem 0 0;
            cursor: pointer;
            transition: border .2s, background .2s;

            &:hover {
                border: 1px solid transparent;
                background: $c3;
            }
        }
    }
}
.home-discord-banner-members-count {
    color: $c3;
}

/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
    .home-discord-banner {
        & > div {
            & > button {
                background: $c3;
                border: 1px solid transparent;
            }
        }
    }
}
</style>