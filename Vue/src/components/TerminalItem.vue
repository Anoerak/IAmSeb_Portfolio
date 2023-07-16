<script>
// We get the component passed to the Terminal component in the HomeView.vue file
import { onMounted } from 'vue'
import IAmSeb from '../components/IAmSebItem.vue'

export default {
    name: 'TerminalItem',
    components: {
        IAmSeb
    },
    props: {
        type: Object,
        default: () => {}
    }
}

onMounted(() => {
    class Terminal {
        /**
         * Construct the widget's settings.
         * @param {(string|Node)=} container - Query selector or container element.
         * @param {Object=} options - Custom settings.
         * @param {string} options.prefix - Prefix to use for data attributes.
         * @param {number} options.startDelay - Delay before animation, in ms.
         * @param {number} options.typeDelay - Delay between each typed character, in ms.
         * @param {number} options.lineDelay - Delay between each line, in ms.
         * @param {number} options.progressLength - Number of characters displayed as progress bar.
         * @param {string} options.progressChar – Character to use for progress bar, defaults to █.
         * @param {number} options.progressPercent - Max percent of progress.
         * @param {string} options.cursor – Character to use for cursor, defaults to ▋.
         * @param {Object[]} lineData - Dynamically loaded line data objects.
         * @param {boolean} options.noInit - Don't initialise the animation.
         */
        constructor(container = '#terminal', options = {}) {
            this.container =
                typeof container === 'string' ? document.querySelector(container) : container
            this.pfx = `data-${options.prefix || 'ty'}`
            this.startDelay =
                options.startDelay ||
                parseFloat(this.container.getAttribute(`${this.pfx}-startDelay`)) ||
                600
            this.typeDelay =
                options.typeDelay ||
                parseFloat(this.container.getAttribute(`${this.pfx}-typeDelay`)) ||
                90
            this.lineDelay =
                options.lineDelay ||
                parseFloat(this.container.getAttribute(`${this.pfx}-lineDelay`)) ||
                1500
            this.progressLength =
                options.progressLength ||
                parseFloat(this.container.getAttribute(`${this.pfx}-progressLength`)) ||
                40
            this.progressChar =
                options.progressChar ||
                this.container.getAttribute(`${this.pfx}-progressChar`) ||
                '█'
            this.progressPercent =
                options.progressPercent ||
                parseFloat(this.container.getAttribute(`${this.pfx}-progressPercent`)) ||
                100
            this.cursor = options.cursor || this.container.getAttribute(`${this.pfx}-cursor`) || '▋'
            this.lineData = this.lineDataToElements(options.lineData || [])
            if (!options.noInit) this.init()
        }

        /**
         * Initialise the widget, get lines, clear container and start animation.
         */
        init() {
            // Appends dynamically loaded lines to existing line elements.
            this.lines = [...this.container.querySelectorAll(`[${this.pfx}]`)].concat(this.lineData)

            /**
             * Calculates width and height of terminal container.
             * If container is empty and lines are dynamically loaded, defaults to browser `auto` or CSS.
             */
            const containerStyle = getComputedStyle(this.container)
            this.container.style.width =
                containerStyle.width !== '0px' ? containerStyle.width : undefined
            // this.container.style.minHeight = containerStyle.height !== '0px' ? containerStyle.height : undefined;
            this.container.style.height = '500px'
            this.container.style.overflow = 'auto'
            this.container.style.scrollBehavior = 'smooth'

            this.container.setAttribute('data-terminal', '')
            this.container.innerHTML = ''
            this.start()
        }

        /**
         * Start the animation and render the lines depending on their data attributes.
         */
        async start() {
            await this._wait(this.startDelay)

            for (let line of this.lines) {
                const type = line.getAttribute(this.pfx)
                const delay = line.getAttribute(`${this.pfx}-delay`) || this.lineDelay

                if (type === 'input') {
                    line.setAttribute(`${this.pfx}-cursor`, this.cursor)
                    await this.type(line)
                    await this._wait(delay)
                } else if (type === 'progress') {
                    await this.progress(line)
                    await this._wait(delay)
                } else {
                    this.container.appendChild(line)
                    await this._wait(delay)
                }

                line.removeAttribute(`${this.pfx}-cursor`)
            }
        }

        /**
         * Animate a typed line.
         * @param {Node} line - The line element to render.
         */
        async type(line) {
            const chars = [...line.textContent]
            const delay = line.getAttribute(`${this.pfx}-typeDelay`) || this.typeDelay
            line.textContent = ''
            this.container.appendChild(line)

            for (let char of chars) {
                await this._wait(delay)
                line.textContent += char
            }
        }

        /**
         * Animate a progress bar.
         * @param {Node} line - The line element to render.
         */
        async progress(line) {
            const progressLength =
                line.getAttribute(`${this.pfx}-progressLength`) || this.progressLength
            const progressChar = line.getAttribute(`${this.pfx}-progressChar`) || this.progressChar
            const chars = progressChar.repeat(progressLength)
            const progressPercent =
                line.getAttribute(`${this.pfx}-progressPercent`) || this.progressPercent
            line.textContent = ''
            this.container.appendChild(line)

            for (let i = 1; i < chars.length + 1; i++) {
                await this._wait(this.typeDelay)
                const percent = Math.round((i / chars.length) * 100)
                line.textContent = `${chars.slice(0, i)} ${percent}%`
                if (percent > progressPercent) {
                    break
                }
            }
        }

        /**
         * Helper function for animation delays, called with `await`.
         * @param {number} time - Timeout, in ms.
         */
        _wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }

        /**
         * Converts line data objects into line elements.
         *
         * @param {Object[]} lineData - Dynamically loaded lines.
         * @param {Object} line - Line data object.
         * @returns {Element[]} - Array of line elements.
         */
        lineDataToElements(lineData) {
            return lineData.map((line) => {
                let div = document.createElement('div')
                div.innerHTML = `<span ${this._attributes(line)}>${line.value || ''}</span>`

                return div.firstElementChild
            })
        }

        /**
         * Helper function for generating attributes string.
         *
         * @param {Object} line - Line data object.
         * @returns {string} - String of attributes.
         */
        _attributes(line) {
            let attrs = ''
            for (let prop in line) {
                attrs += this.pfx

                if (prop === 'type') {
                    attrs += `="${line[prop]}" `
                } else if (prop !== 'value') {
                    attrs += `-${prop}="${line[prop]}" `
                }
            }

            return attrs
        }
    }

    // We initialise the terminal by looking for the ID terminal-back and then running the Terminal class on it.
    new Terminal('#terminal-back')

    // We get the width and height of the props
    const width = document.querySelector('.box').offsetWidth
    const height = document.querySelector('.box').offsetHeight
    console.log('Hello: ', document.querySelector('.box'))
    // We apply those value to the .flip__terminal element
    document.querySelector('.flip__terminal').style.width = `${width}px`
    document.querySelector('.flip__terminal').style.height = `${height}px`

    // When terminal flips, we get the width and height of the props again
    document.querySelector('.flip__terminal__back').addEventListener('transitionend', () => {
        const width = document.querySelector('.box').offsetWidth
        const height = document.querySelector('.box').offsetHeight
        // We apply those value to the .flip__terminal element
        document.querySelector('.flip__terminal').style.width = `${width}px`
        document.querySelector('.flip__terminal').style.height = `${height}px`
    })
})
</script>

<template>
    <div class="flip__terminal">
        <div class="flip__terminal__inner">
            <div class="flip__terminal__front">
                <slot>
                    <IAmSeb />
                </slot>
            </div>
            <div class="flip__terminal__back">
                <div
                    id="terminal-back"
                    data-terminal
                    data-ty-startdelay="7000"
                    data-ty-typedelay="10"
                    data-ty-linedelay="50"
                >
                    <div data-ty>
                        <font-awesome-icon :icon="['fab', 'html5']" bounce />
                        <font-awesome-icon :icon="['fab', 'css3-alt']" bounce />
                        <font-awesome-icon :icon="['fab', 'js']" bounce />
                    </div>
                    <div data-ty="input" data-ty-prompt="👨‍💻">
                        Here's the HTML behind this terminal...
                    </div>
                    <div data-ty="input" data-ty-prompt="1">
                        <span class="code">&lt;div class="card"&gt;</span>
                    </div>
                    <div data-ty="input" data-ty-prompt="2">
                        <span class="code"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card__header"&gt;</span
                        >
                    </div>
                    <div data-ty="input" data-ty-prompt="3">
                        <span class="code"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;</span
                        >Random Card
                        <span class="code">&lt;/h2&gt;</span>
                    </div>
                    <div data-ty="input" data-ty-prompt="4">
                        <span class="code">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
                    </div>
                    <div data-ty="input" data-ty-prompt="5">
                        <span class="code"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card__image"&gt;</span
                        >
                    </div>
                    <div data-ty="input" data-ty-prompt="6">
                        <span class="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img
                            src="https://picsum.photos/300/200?random=1" alt="Random Image"&gt;
                        </span>
                    </div>
                    <div data-ty="input" data-ty-prompt="7">
                        <span class="code">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
                    </div>
                    <div data-ty="input" data-ty-prompt="8">
                        <span class="code"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card__footer"&gt;</span
                        >
                    </div>
                    <div data-ty="input" data-ty-prompt="9">
                        <span class="code"
                            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span
                        >Random Footer
                        <span class="code">&lt;/p&gt;</span>
                    </div>
                    <div data-ty="input" data-ty-prompt="10">
                        <span class="code">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
                    </div>
                    <div data-ty="input" data-ty-prompt="11">
                        <span class="code">&lt;/div&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    /* Light Mode */
    --terminal-color-bg: #eee;
    --terminal-color-text: #000000;
    --terminal-navbar-bg: #000;
    --terminal-color-text-subtle: #58d287;
    --terminal-color-opening-closing: #df396b;
    --terminal-color-spinner: #fd8331;

    /* Dark Mode */
    --dark-terminal-color-bg: #252a33;
    --dark-terminal-color-text: #eee;
    --dark-terminal-navbar-bg: #1a1d24;
    --dark-terminal-color-text-subtle: #58d287;
    --dark-terminal-color-opening-closing: #df396b;
    --dark-terminal-color-spinner: #fd8331;
}

/* 
|----------------------------------
| Flip Card
|---------------------------------- 
*/

body > #root > section .flip__terminal {
    background-color: transparent;
    min-width: 300px;
    max-width: 100%;
    min-height: 365px;
    border-radius: 6px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
body > #root > section .flip__terminal__inner {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    transition: transform 0.8s 6s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
body > #root > section .flip__terminal:hover .flip__terminal__inner {
    transform: rotateY(180deg);
}
body > #root > section .flip__terminal:hover .cont {
    display: block;
    z-index: 100;
}
body > #root > section .flip__terminal:hover .flip__terminal__front {
    opacity: 0;
    transition-delay: 6.5s;
}

/* Position the front and back side */
body > #root > section .flip__terminal__front,
body > #root > section .flip__terminal__back {
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
body > #root > section .flip__terminal__front {
    border-radius: 6px;
    background-color: var(--terminal-color-bg);
    color: var(--terminal-color-text);
}
body.dark > #root > section .flip__terminal__front {
    background-color: var(--dark-terminal-color-bg);
    color: var(--dark-terminal-color-text);
}

/* Style the back side */
body > #root > section .flip__terminal__back {
    min-width: 750px;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    transform: rotateY(180deg);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
body.dark > #root > section .flip__terminal__back {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

/* 
|----------------------------------
| terminal
|---------------------------------- 
*/

body > #root > section .flip__terminal__back svg {
    font-size: 1.5rem;
    margin-right: 1rem;
}

body > #root > section [data-terminal] {
    width: 750px;
    max-width: 100%;
    background: var(--terminal-color-bg);
    color: var(--terminal-color-text);
    font-size: 18px;
    font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;
    border-radius: 6px;
    padding: 75px 45px 35px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
body.dark > #root > section [data-terminal] {
    background: var(--dark-terminal-color-bg);
    color: var(--dark-terminal-color-text);
}

body > #root > section [data-terminal]:before {
    z-index: 10;
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    /* A little hack to display the window buttons in one pseudo element. */
    background: #d9515d;
    -webkit-box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
    box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
}

/* We create a black navbar with the ::after pseudo element */
body > #root > section [data-terminal]::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background: var(--terminal-navbar-bg);
    border-radius: 6px 6px 0 0;
}
body.dark > #root > section [data-terminal]::after {
    background: var(--dark-terminal-navbar-bg);
}

body > #root > section [data-ty] {
    display: block;
    line-height: 2;
}

body > #root > section [data-ty]:before {
    /* Set up defaults and ensure empty lines are displayed. */
    content: '';
    display: inline-block;
    vertical-align: middle;
}

body > #root > section [data-ty='input']:before,
body > #root > section [data-ty-prompt]:before {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    margin-right: 0.75em;
    color: var(--terminal-color-text-subtle);
}
body.dark > #root > section [data-ty='input']:before,
body.dark > #root > section [data-ty-prompt]:before {
    color: var(--dark-terminal-color-text-subtle);
}

body > #root > section [data-ty='input']:before {
    content: '$';
}

body > #root > section [data-ty][data-ty-prompt]:before {
    content: attr(data-ty-prompt);
}

body > #root > section [data-ty-cursor]:after {
    content: attr(data-ty-cursor);
    font-family: monospace;
    margin-left: 0.5em;
    -webkit-animation: blink 1s infinite;
    animation: blink 1s infinite;
}

/*
|----------------------------------
| Opening and closing animation (spinner)
|---------------------------------- 
 */

body > #root > section .cont {
    display: none;
    /* z-index: 1; */
    width: 40px;
    height: 40px;
    position: absolute;
    text-align: center;
    font-weight: bold;
    top: 2.5px;
    right: 2.5px;
    border-radius: 50%;
    overflow: hidden;
}
body > #root > section .cont::after {
    content: '';
    width: 35px;
    height: 35px;
    position: absolute;
    top: 2.5px;
    right: 2.75px;
    border-radius: 50%;
    background: var(--dark-terminal-color-bg);
}
body.dark > #root > section .cont::after {
    background: var(--dark-terminal-color-bg);
}

body > #root > section .spinner {
    position: absolute;
    top: 22.5px;
    right: 0;
    width: 25px;
    height: 35px;
    transform-origin: 0 0;
    background-image: linear-gradient(var(--terminal-color-spinner), transparent);
    animation: spin 1s infinite linear;
}

body > #root > section .number {
    position: absolute;
    top: -5px;
    left: 0;
    z-index: 1;
    width: 40px;
    height: 40px;
}
body > #root > section .number::after {
    content: '';
    z-index: -1;
    width: 40px;
    height: 40px;
    color: var(--terminal-color-spinner);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 20px;
    line-height: 50px;
    animation: count 7s;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}

@keyframes count {
    0% {
        content: '5';
    }
    15% {
        content: '4';
    }
    30% {
        content: '3';
    }
    45% {
        content: '2';
    }
    60% {
        content: '1';
    }
    75% {
        content: '0';
    }
    90% {
        content: 'GO';
    }
    100% {
        content: '';
    }
}

/* Cursor animation */

@-webkit-keyframes blink {
    50% {
        opacity: 0;
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
