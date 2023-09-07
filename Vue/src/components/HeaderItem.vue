<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

import gsap from 'gsap'

import DarkMode from './DarkMode.vue'

onMounted(() => {
    /* #region  Navbar */
    // Navbar Hover Effect based on mouse movement listener
    document.querySelector('.menu__ul').onmousemove = (e) => {
        for (const li of document.querySelectorAll('.menu__li')) {
            // Get the position of the cursor in the li
            const rect = li.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top
            // Set the css variables
            li.style.setProperty('--mouse-x', `${x}px`)
            li.style.setProperty('--mouse-y', `${y}px`)
        }
    }

    // Navbar Click on Nav Link Listener
    document.querySelectorAll('.menu__li').forEach((li) => {
        li.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.href = li.querySelector('.li__link').href
        })
    })

    // On scroll, if on desktop, the navbar disappears or hamburger disappears
    const navbar = document.querySelector('nav')
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 992) {
            navbar.style.animation = 'fadingOut 0.5s ease-in-out forwards'
            // If the user is at the top of the page, the navbar reappears
            if (window.pageYOffset === 0) {
                navbar.style.animation = 'fadingIn 0.25s ease-in-out forwards'
            }
        }
    })

    // On hover, the navbar reappears
    navbar.addEventListener('mouseenter', () => {
        if (window.innerWidth > 992 && window.pageYOffset !== 0) {
            navbar.style.animation = 'fadingIn 0.25s ease-in-out forwards'
        }
    })
    /* #endregion */


    /* #region  Responsive */
    // Responsive Navbar
    const open = document.querySelector('.hamburger__menu__container')
    const close = document.querySelector('.close')
    var tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'expo.inOut' } })
    open.addEventListener('click', () => {
        if (tl.reversed()) {
            tl.play()
        } else {
            tl.to('nav', { right: 0 })
                .to('nav', { height: '100vh', top: 0 }, '-=.1')
                .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
                .to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
                .to('nav h2', { opacity: 1 }, '-=1')
        }
        document.querySelectorAll('.li__content').forEach((li) => {
            setTimeout(() => {
                li.style.backgroundColor = 'var(--text__color)'
            }, 1800)
        })
    })

    close.addEventListener('click', () => {
        tl.reverse()
        document.querySelectorAll('.li__content').forEach((li) => {
            li.style.backgroundColor = 'transparent'
        })
        // Find a better management for this
        setTimeout(() => {
            window.location.reload()
        }, 2500)
    })

    // Scrolling is inactive when innerWidth < 992px
    window.addEventListener('scroll', () => {
        if (window.innerWidth < 992 && tl.reversed()) {
            window.scrollTo(0, 0)
        }
    })
    /* #endregion */
})
</script>

<template>
    <header id="header">
        <div class="hamburger__menu__container">
            <div class="hamburger__menu__icon"></div>
        </div>

        <h1 id="top">I Am Seb</h1>

        <DarkMode />

        <nav>
            <h2>Sébastien P.</h2>
            <div class="close">
                <div></div>
            </div>
            <ul class="menu__ul">
                <li class="menu__li">
                    <div class="li__border"></div>
                    <div class="li__content">
                        <RouterLink class="li__link" to="/"> Home </RouterLink>
                    </div>
                </li>
                <li class="menu__li">
                    <div class="li__border"></div>
                    <div class="li__content">
                        <RouterLink class="li__link" to="/projects"> Projects </RouterLink>
                    </div>
                </li>
                <li class="menu__li">
                    <div class="li__border"></div>
                    <div class="li__content">
                        <RouterLink class="li__link" to="/about"> About </RouterLink>
                    </div>
                </li>
                <li class="menu__li">
                    <div class="li__border"></div>
                    <div class="li__content">
                        <RouterLink class="li__link" to="/contact"> Contact </RouterLink>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
body>#root>header {
    margin: auto;
    /* overflow: hidden; */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 10rem;
    animation: fadingIn 0.5s ease;
}

body>#root>header>h1,
body.dark>#root>header>h1 {
    z-index: 15;
    display: none;
}

body>#root>header>nav>h2 {
    opacity: 0;
}

/*
|--------------------------------------
| Dark Mode Toggler + Dark Mode
|--------------------------------------
*/

body>#root>header>.toggler {
    display: block;
    position: fixed;
    width: 48px;
    height: 48px;
    right: 24px;
    top: 24px;
    background-color: #222;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 300ms ease-in-out;
    will-change: transform;
}

body>#root>header>.toggler::after {
    content: '';
    position: fixed;
    width: 16px;
    height: 16px;
    left: 16px;
    top: 15px;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/626120/moon_copy.svg) no-repeat;
}

body>#root>header>.toggler:hover {
    background-color: #555;
    transform: rotate(-45deg);
}

body.dark>#root>header>.toggler {
    background-color: #eee;
}

body.dark>#root>header>.toggler::after {
    content: '';
    position: fixed;
    width: 16px;
    height: 16px;
    left: 16px;
    top: 16px;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/626120/sun.svg);
}

body>#root>header>.circle {
    border: none;
    display: block;
    right: 24px;
    top: 24px;
    position: fixed;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    z-index: 99;
    mix-blend-mode: difference;
    backdrop-filter: blur(2px);
    transition: transform 1s ease;
    transform: scale(1) translateZ(0);
    outline: 1px solid transparent;
    backface-visibility: hidden;
    will-change: transform;
    perspective: 1000;
}

body>#root>header>.circle.clicked {
    transform: scale(128) translateZ(0);
}

/*
|--------------------------------------
| Navbar + Hover Effect + Dark Mode
|--------------------------------------
*/

/* body.dark > #root > header > nav {
	background-color: var(--dark__bg__color);
} */
body>#root>header>nav {
    position: fixed;
    width: 80%;
    border-radius: 5rem;
    /* margin-top: 1.5rem; */
    z-index: 100;
}

/* body.dark > #root > header > nav > .menu__ul {
	background-color: var(--dark__bg__color);
} */
body>#root>header>nav>.menu__ul {
    /* background-color: var(--bg__color); */
    /* overflow: hidden; */
    height: 100%;
    border-radius: 2rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 2px;
    margin: -6rem 0 0 0;
    padding: 0;
}

body.dark>#root>header>nav>.menu__ul>.menu__li {
    background-color: var(--dark__bg__color);
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: var(--box-shadows-dark-outset);
}

body>#root>header>nav>.menu__ul>.menu__li {
    margin: 0;
    width: 25%;
    background-color: var(--bg__color);
    text-align: center;
    vertical-align: middle;
    line-height: 3.5rem;
    position: relative;
    cursor: pointer;
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: var(--box-shadows-light-outset);
}

body>#root>header>nav>.menu__ul>.menu__li:active {
    box-shadow: var(--box-shadows-light-inset);
}

body.dark>#root>header>nav>.menu__ul>.menu__li:active {
    box-shadow: var(--box-shadows-dark-inset);
}

body>#root>header>nav>.menu__ul>.menu__li:nth-child(1) {
    border-radius: 5rem 1rem 1rem 5rem;
}

body>#root>header>nav>.menu__ul>.menu__li:nth-child(2),
body>#root>header>nav>.menu__ul>.menu__li:nth-child(3) {
    border-radius: 0.25rem;
}

body>#root>header>nav>.menu__ul>.menu__li:nth-child(4) {
    border-radius: 1rem 5rem 5rem 1rem;
}

body>#root>header>nav>.menu__ul:hover>.menu__li>.li__border {
    opacity: 1;
}

body>#root>header>nav>.menu__ul>.menu__li:hover::before {
    opacity: 1;
}

.menu__li::before,
.menu__li>.li__border {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    z-index: 2;
}

body.dark>#root>header.menu__li::before {
    background: radial-gradient(700px circle at var(--mouse-x) var(--mouse-y),
            var(--dark__li__hovered),
            transparent 40%);
    z-index: 3;
}

.menu__li::before {
    background: radial-gradient(700px circle at var(--mouse-x) var(--mouse-y),
            var(--li__hovered),
            transparent 40%);
    z-index: 3;
}

body.dark>#root>header>nav>.menu__ul>.menu__li>.li__border {
    background: radial-gradient(350px circle at var(--mouse-x) var(--mouse-y),
            var(--dark__li__border__hovered),
            transparent 40%);
    z-index: 1;
}

body>#root>header>nav>.menu__ul>.menu__li>.li__border {
    background: radial-gradient(350px circle at var(--mouse-x) var(--mouse-y),
            var(--li__border__hovered),
            transparent 40%);
    z-index: 1;
}

body.dark>#root>header>nav>.menu__ul>.menu__li>.li__content {
    background-color: var(--dark__nav__bg__color);
}

body>#root>header>nav>.menu__ul>.menu__li>.li__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--nav__bg__color);
    border-radius: inherit;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    margin: 1px;
    position: relative;
    z-index: 2;
}

body.dark>#root>header>nav>.menu__ul>.menu__li>.li__content>a {
    color: var(--dark__text__color);
}

body>#root>header>nav>.menu__ul>.menu__li>.li__content>a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--text__color);
    width: 100%;
    border-radius: inherit;
    overflow: hidden;
}

/*
|--------------------------------------
| Navbar Responsive
|--------------------------------------
*/

@media screen and (orientation: portrait) and (max-width: 600px) {
    body>#root>header {
        min-height: 8rem;
        justify-content: center;
    }

    /* Dark Mode Toggler */
    body>#root>header>.toggler,
    body>#root>header>.circle {
        left: 24px;
    }

    /* Hamburger Menu Icon */
    body>#root>header>.hamburger__menu__container {
        cursor: pointer;
        position: fixed;
        top: 5%;
        right: 5%;
        width: 30px;
        height: 20px;
        text-align: initial;
        z-index: 100;
    }

    body.dark>#root>header>.hamburger__menu__container>.hamburger__menu__icon {
        background: var(--dark__text__color);
    }

    body>#root>header>.hamburger__menu__container>.hamburger__menu__icon {
        width: 30px;
        height: 4px;
        background: var(--text__color);
    }

    body.dark>#root>header>.hamburger__menu__container>.hamburger__menu__icon::before,
    body.dark>#root>header>.hamburger__menu__container>.hamburger__menu__icon::after {
        background: var(--dark__text__color);
    }

    body>#root>header>.hamburger__menu__container>.hamburger__menu__icon::before,
    body>#root>header>.hamburger__menu__container>.hamburger__menu__icon::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        background: var(--text__color);
    }

    .hamburger__menu__icon::before {
        margin-top: 9px;
    }

    .hamburger__menu__icon::after {
        margin-top: 18px;
    }

    /* Responsive Menu */
    body>#root>header>nav,
    body.dark>#root>header>nav {
        /* position: absolute; */
        width: 100%;
        height: 30px;
        max-height: none;
        border-radius: 0;
        background: var(--text__color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: -200vw;
        top: 50vh;
        z-index: 1000;
    }

    body>#root>header>nav>.menu__ul,
    body.dark>#root>header>nav>.menu__ul {
        list-style: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--text__color);
        border-radius: 0;
        width: inherit;
        margin-top: -3rem;
    }

    body>#root>header>nav>.menu__ul>.menu__li:nth-child(-n + 4),
    body.dark>#root>header>nav>.menu__ul>.menu__li:nth-child(-n + 4) {
        margin: 50px 0;
        border: none;
        background-color: transparent;
        box-shadow: none;
        border-radius: 2rem;
        min-width: fit-content;
    }

    .menu__li::before,
    .menu__li>.li__border {
        min-width: fit-content;
        padding: 0 1rem;
    }

    body>#root>header>nav>.menu__ul>.menu__li>.li__content,
    body.dark>#root>header>nav>.menu__ul>.menu__li>.li__content {
        background-color: transparent;
        min-width: fit-content;
        padding: 0 1rem;
    }

    body>#root>header>nav>.menu__ul>.menu__li>.li__content>.li__link,
    body.dark>#root>header>nav>.menu__ul>.menu__li>.li__content>.li__link {
        font-size: 2rem;
        color: var(--bg__color);
        background-color: transparent;
        text-decoration: none;
        position: relative;
        opacity: 0;
        pointer-events: none;
    }

    body>#root>header>nav ul li a:after {
        content: '';
        width: 100%;
        position: absolute;
        height: 3px;
        border-radius: 5px;
        background: #fff;
        bottom: -10px;
        left: 0;
        transform-origin: left;
        transition: transform 0.5s ease;
        transform: scaleX(0);
    }

    body>#root>header>nav ul li a:hover:after {
        transform: scaleX(1);
    }

    body>#root>header>nav .close {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 6%;
        right: 5%;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
    }

    body>#root>header>nav h2 {
        position: absolute;
        top: 5%;
        left: 5%;
        opacity: 0;
        pointer-events: none;
        color: #fff;
    }

    body>#root>header>nav .close div::before,
    body>#root>header>nav .close div::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        background: #fff;
        transition: background 0.5s ease;
    }

    body>#root>header>nav .close div::before {
        transform: rotate(-45deg);
    }

    body>#root>header>nav .close div::after {
        transform: rotate(45deg);
    }

    body>#root>header>nav .close:hover div::before,
    body>#root>header>nav .close:hover div::after {
        background: rgb(209, 3, 3);
    }
}

@media screen and (orientation: landscape) and (max-width: 812px) {
    body>#root>header {
        min-height: 8rem;
        justify-content: center;
    }

    body>#root>header>nav>.menu__ul {
        margin-top: -8rem;
    }

    /* Dark Mode Toggler */
    body>#root>header>.toggler,
    body>#root>header>.circle {
        left: 24px;
    }
}

/*
|--------------------------------------
| Animations
|--------------------------------------
*/

@keyframes fadingOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes fadingIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
