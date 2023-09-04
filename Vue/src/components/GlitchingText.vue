<script>
import { defineProps } from 'vue'
defineProps(['text', 'ClassName', 'tags', 'dataValue'])

export default {
    name: 'GlitchingText',
    props: {
        text: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        },
        tags: {
            type: String,
            default: ''
        },
        dataValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            // text: '',
            // className: '',
            // tags: '',
            // dataValue: ''
        }
    },
    mounted() {
        const letters = "0123456789ABCDEFGHIJKLMNOØPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?/.,'"

        let interval = null

        let title1 = document.querySelector('.title1')
        let title2 = document.querySelector('.title2')
        let title3 = document.querySelector('.title3')

        const lettersEffect = (element, duration) => {
            let iteration = 0

            clearInterval(interval)

            interval = setInterval(() => {
                element.innerText = element.innerText
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return element.dataset.value[index]
                        }

                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join('')
                if (iteration >= element.dataset.value.length) {
                    clearInterval(interval)
                }
                iteration += 1 / 3
            }, duration)
        }

        // We wait 1 second before starting the subtitle effect
        if (title1) {
            setTimeout(() => {
                lettersEffect(title1, 20)
            }, 1500)
        }
        if (title3) {
            setTimeout(() => {
                lettersEffect(title3, 20)
            }, 4100)
        }
        if (title2) {
            setTimeout(() => {
                lettersEffect(title2, 10)
            }, 3600)
        }
    }
}
</script>

<template>
    <component :is="tags" :class="'glitching-text ' + className" :data-value="dataValue">{{
        text
    }}</component>
</template>

<style>
.glitching-text {
    animation: glitch 1s linear infinite;
}
.glitching-text:hover,
.glitching-text:hover::before,
.glitching-text:hover::after {
    animation: none;
}

.glitching-text::before,
.glitching-text::after {
    right: 0;
}

.glitching-text::before,
.glitching-text::after {
    content: attr(data-value);
    position: absolute;
    left: 1rem;
    opacity: 0;
}

.glitching-text::before {
    animation: glitchTop 1s linear infinite, changeOpacity 0.25s forwards 4s;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.glitching-text::after {
    animation: glitchBottom 1.5s linear infinite, changeOpacity 0.25s forwards 4s;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitch {
    2%,
    64% {
        transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
        transform: translate(-2px, 0) skew(0deg);
    }
    62% {
        transform: translate(0, 0) skew(5deg);
    }
}

@keyframes glitchTop {
    2%,
    64% {
        transform: translate(2px, -2px);
    }
    4%,
    60% {
        transform: translate(-2px, 2px);
    }
    62% {
        transform: translate(13px, -1px) skew(-13deg);
    }
}

@keyframes glitchBottom {
    2%,
    64% {
        transform: translate(-2px, 0);
    }
    4%,
    60% {
        transform: translate(-2px, 0);
    }
    62% {
        transform: translate(-22px, 5px) skew(21deg);
    }
}

@keyframes changeOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
