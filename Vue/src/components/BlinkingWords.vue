<script>
export default {
    name: 'BlinkingWords',
    props: {
        tag: {
            type: String,
            required: true
        },
        words: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            transformedWords: [
                'matrix(1 0 0 1 497.4292 293.7129)',
                'matrix(1 0 0 1 727.8999 191.9316)',
                'matrix(1 0 0 1 433.0854 82.7407)',
                'matrix(1 0 0 1 188.187 144.3555)',
                'matrix(1 0 0 1 380.8301 145.1353)',
                'matrix(1 0 0 1 378.8799 54.6626)',
                'matrix(1 0 0 1 247.0718 191.1514)',
                'matrix(1 0 0 1 0 129.9268)',
                'matrix(1 0 0 1 250.9712 76.1118)',
                'matrix(1 0 0 1 229.9131 169.5225)',
                'matrix(1 0 0 1 472.4722 105.3691)',
                'matrix(1 0 0 1 735.7007 163.4639)',
                'matrix(1 0 0 1 128.9111 264.4697)',
                'matrix(1 0 0 1 191.3057 102.2393)',
                'matrix(1 0 0 1 318.4351 289.0342)',
                'matrix(1 0 0 1 740.77 211.4307)',
                'matrix(1 0 0 1 683.0542 230.5381)',
                'matrix(0.9244 0 0 1 632.7485 97.0288)',
                'matrix(1 0 0 1 663.5552 139.2856)',
                'matrix(1 0 0 1 251.3608 240.4502)',
                'matrix(1 0 0 1 217.0439 54.2744)',
                'matrix(1 0 0 1 119.9526 240.2871)',
                'matrix(1 0 0 1 444.0044 34.7744)',
                'matrix(1 0 0 1 125.4019 129.147)',
                'matrix(1 0 0 1 350.8022 207.5303)',
                'matrix(1 0 0 1 81.5249 212.6006)',
                'matrix(1 0 0 1 545.0063 316.7061)',
                'matrix(1 0 0 1 638.2075 66.7529)',
                'matrix(1 0 0 1 185.8467 282.4043)',
                'matrix(1 0 0 1 34.1494 150.5947)',
                'matrix(1 0 0 1 34.1494 50.5947)',
                'matrix(1 0 0 1 34.1494 50.5947)',
            ],
            classList: [
                'st17 st0',
                'st17 st20',
                'st17 st8',
                'st5 st17 st22',
                'st17 st29',
                'st5 st28 st6',
                'st5 st28 st18',
                'st5 st28 st30',
                'st5 st28 st14',
                'st5 st28 st25',
                'st5 st28 st27',
                'st5 st28 st1',
                'st5 st28 st26',
                'st5 st28 st24',
                'st5 st28 st1',
                'st5 st28 st21',
                'st5 st28 st19',
                'st5 st28 st16',
                'st5 st28 st3',
                'st5 st17 st31',
                'st5 st28 st11',
                'st5 st28 st13',
                'st5 st17 st4',
                'st5 st28 st15',
                'st17 st2',
                'st17 st9',
                'st5 st28 st23',
                'st5 st28 st12',
                'st5 st28 st10',
                'st5 st28 st7',
                'st5 st28 st7',
                'st5 st28 st7',
            ]
        }
    },
    mounted() {
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const blinkWord = (tag) => {
            let words = document.getElementById(tag).querySelectorAll('text'),
                l = words.length,
                current = null,
                delay = random(2, 4) * 1000

            function clearBlink(o) {
                // We get the class of the element
                let ca = o.className.baseVal.split(' '),
                    // We get the index of the class 'blink'
                    i = ca.indexOf('blink')

                // If the index is not -1, we remove the class 'blink'
                if (i !== -1) {
                    ca.splice(i, 1)
                    o.setAttribute('class', ca.join(' '))
                }
            }

            function addBlink(o) {
                let ca = o.className.baseVal.split(' ')
                ca.push('blink')
                o.setAttribute('class', ca.join(' '))
            }

            function wordBlink() {
                let e

                // If current is not null, we remove the class 'blink' from the element
                if (current !== null) {
                    clearBlink(words[current])
                }

                // We get a random number between 0 and the length of the array
                current = Math.floor(Math.random() * l)
                // We get the element at the index of the random number
                e = words[current]
                // We add the class 'blink' to the element
                addBlink(e)

                // We call the function again after a delay
                setTimeout(wordBlink, delay)
            }

            wordBlink()
        }
        // We delay the blink effect to let the words appear
        setTimeout(() => {
            blinkWord('tag-index-front')
            blinkWord('tag-index-back')
            blinkWord('tag-index-others')
            blinkWord('tag-index-learningFront')
            blinkWord('tag-index-learningBack')
        }, random(2, 4) * 1000)
    }
}
</script>

<template>
    <svg :id="'tag-index-' + tag" x="0px" y="0px" width="925px" height="325px" viewBox="0 0 925 325">
        <!-- We loop through the array 'words' and return a <text> tag -->
        <text v-for="(word, index) in words" :key="index" :class="classList[index]" :transform="transformedWords[index]">
            {{ word }}
        </text>
    </svg>
</template>

<style>
:root {
    /* Light Mode */
    --blinking-color-start-end: #e2192d00;
    --blinking-bg-middle: rgb(253, 131, 49, 0.8);
    --text-shadow-star-end: 0 0 15px var(--blinking-color-start-end);
    --text-shadow-middle: -5px -5px 15px var(--blinking-bg-middle),
        5px -5px 15px var(--blinking-bg-middle), 5px 5px 15px var(--blinking-bg-middle),
        -5px 5px 15px var(--blinking-bg-middle);

    /* Dark Mode */
    --dark__blinking-color-start-end: #ffffff;
    --dark__blinking-bg-middle: rgb(253, 131, 49, 0.5);
    --dark__text-shadow-start-end: 0 0 15px var(--dark__blinking-color-start-end);
    --dark__text-shadow-middle: -5px -5px 15px var(--dark__blinking-bg-middle),
        5px -5px 15px var(--dark__blinking-bg-middle), 5px 5px 15px var(--dark__blinking-bg-middle),
        -5px 5px 15px var(--dark__blinking-bg-middle);
}

svg text.blink {
    animation: blink 2s ease-out;
}

body.dark svg text.blink {
    animation: darkBlink 2s ease-out;
}

#tag-index-front,
#tag-index-back,
#tag-index-others,
#tag-index-learningFront,
#tag-index-learningBack {
    width: 95%;
    height: 100%;
}

@keyframes blink {
    0% {
        text-shadow: var(--text-shadow-start-end);
    }

    20% {
        fill: var(--blinking-bg-middle);
        text-shadow: var(--text-shadow-middle);
    }

    30% {
        fill: var(--blinking-bg-middle);
        text-shadow: var(--text-shadow-middle);
    }

    100% {
        text-shadow: var(--text-shadow-start-end);
    }
}

@keyframes darkBlink {
    0% {
        text-shadow: var(--dark__text-shadow-start-end);
    }

    20% {
        fill: var(--dark__blinking-bg-middle);
        text-shadow: var(--dark__text-shadow-middle);
    }

    30% {
        fill: var(--dark__blinking-bg-middle);
        text-shadow: var(--dark__text-shadow-middle);
    }

    100% {
        text-shadow: var(--dark__text-shadow-start-end);
    }
}

/* #region Our list of classes  */
.st0 {
    font-size: 73px;
}

.st1 {
    font-size: 32px;
}

.st2 {
    font-size: 87px;
}

.st3 {
    font-size: 46px;
}

.st4 {
    font-size: 46px;
}

.st5 {
    fill: #808080;
}

.st6 {
    font-size: 29px;
}

.st7 {
    font-size: 29px;
}

.st8 {
    font-size: 67px;
}

.st9 {
    font-size: 91px;
}

.st10 {
    font-size: 23px;
}

.st11 {
    font-size: 23px;
}

.st12 {
    font-size: 30px;
}

.st13 {
    font-size: 30px;
}

.st14 {
    font-size: 30px;
}

.st15 {
    font-size: 37px;
}

.st16 {
    font-size: 37px;
}

.st17 {
    font-family: 'Open Sans';
    font-weight: 600;
    fill: #a0a0a0;
}

.st18 {
    font-size: 27px;
}

.st19 {
    font-size: 27px;
}

.st20 {
    font-size: 41px;
}

.st21 {
    font-size: 24px;
}

.st22 {
    font-size: 56px;
}

.st23 {
    font-size: 31px;
}

.st24 {
    font-size: 38px;
}

.st25 {
    font-size: 25px;
}

.st26 {
    font-size: 28px;
}

.st27 {
    font-size: 28px;
}

.st28 {
    font-family: 'Open Sans';
}

.st29 {
    font-size: 59px;
}

.st30 {
    font-size: 25px;
}

.st31 {
    font-size: 42px;
}

/* #endregion */
</style>
