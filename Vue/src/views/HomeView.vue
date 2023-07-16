<script>
import { onMounted } from 'vue'
import Terminal from '../components/TerminalItem.vue'
import IAmSeb from '../components/IAmSebItem.vue'

export default {
    name: 'HomeView',
    components: {
        Terminal,
        IAmSeb
    },
    props: {
        type: Object,
        default: () => {}
    }
}

onMounted(() => {
    document.title = 'I Am Seb w/ Vue'
})
</script>

<template>
    <section>
        <h2>Coming Soon!!</h2>

        <Terminal>
            <IAmSeb />
        </Terminal>

        <p>
            Exciting news! My website is currently under construction and will be launching soon
            with a fresh new look and cutting-edge technology. Get ready for an awesome user
            experience with intuitive navigation and stunning visuals. Stay tuned for updates and be
            the first to experience my new online presence. I can’t wait to share it with you! 😊
        </p>

        <div class="empty__space"></div>
    </section>
</template>

<style scoped>
/*
|--------------------------------------
| Section 1
|--------------------------------------
*/
body > #root > section {
    margin-top: 3.5rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    animation: fadingIn 1s ease;
}

body > #root > section > h2 {
    font-size: 1.5rem;
    color: var(--text__color);
}
body.dark > #root > section > h2 {
    color: var(--dark__text__color);
}

body > #root > section p {
    margin-top: 2rem;
    font-size: 1.25rem;
    word-spacing: 4px;
    color: var(--text__color);
    text-align: center;
    width: 75%;
}
body.dark > #root > section p {
    color: var(--dark__text__color);
}

body > #root > section > .empty__space {
    height: 50vh;
    margin-top: 5rem;
}

body > #root > section > .empty__space > p {
    font-size: 0.75rem;
}
</style>
