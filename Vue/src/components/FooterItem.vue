<script>
import gitHubLogo from '../assets/imgs/GitHub_logo.png'
import linkedInLogo from '../assets/imgs/LinkedIn_logo.png'

export default {
    name: 'FooterItem',
    data() {
        return {
            gitHubLogo,
            linkedInLogo
        }
    },
    mounted() {
        /// On scroll, if on desktop, the footer disappears or hamburger disappears
        const footer = document.querySelector('footer')
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 992) {
                footer.style.animation = 'fadingOut 0.5s ease-in-out forwards'
                // If the user is at the top of the page, the footer reappears
                if (window.pageYOffset === 0) {
                    footer.style.animation = 'fadingIn 0.5s ease-in-out forwards'
                }
            }
        })

        // On hover, the footer reappears
        footer.addEventListener('mouseenter', () => {
            if (window.innerWidth > 992 && window.pageYOffset !== 0) {
                footer.style.animation = 'fadingIn 0.5s ease-in-out forwards'
            }
        })
    }
}
</script>

<template>
    <footer>
        <div class="footer__container">
            <div class="footer__copy">
                <span>&copy; 2023 IAmSeb</span>
            </div>
            <div class="footer__links">
                <a href="/contact" class="footer__link" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="contactme" />
                </a>
                <a
                    href="https://github.com/Anoerak"
                    class="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img :src="gitHubLogo" alt="GitHub_Logo" class="logo github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/s%C3%A9bastien-p-48717074/"
                    class="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img :src="linkedInLogo" alt="LinkedIn_Logo" class="logo linkedin" />
                </a>
            </div>
        </div>
        <div class="go__to__top__button">
            <a href="#" class="go__to__top__link">
                <div class="go__to__top__icon"></div>
            </a>
        </div>
    </footer>
</template>

<style scoped>
* {
    /* Light Mode */
    --navigate-to-top-button-border: #fd8331;
    /* Dark Mode */
    --dark__navigate-to-top-button-border: #fd8331;
}

body > #root > footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: var(--bg__color);
    box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    animation: fadingIn 1.25s ease;
}
body.dark > #root > footer {
    background: var(--dark__bg__color);
    box-shadow: 0px -3px 5px rgba(255, 255, 255, 0.1);
}

body > #root > footer .go__to__top__button .go__to__top__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
body > #root > footer .go__to__top__button {
    transform: translateX(-50%);
    width: 50px;
    height: 75px;
    border-radius: 2rem 2rem 2rem 2rem;
    background: var(--bg__color);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease;
    cursor: pointer;
    position: relative;
    border: var(--navigate-to-top-button-border) 2px solid;
}
body.dark > #root > footer .go__to__top__button {
    background: var(--dark__bg__color);
    box-shadow: 0px 3px 5px rgba(255, 255, 255, 0.1);
    border: var(--dark__navigate-to-top-button-border) 2px solid;
}
body > #root > footer .go__to__top__button:hover {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}
body.dark > #root > footer .go__to__top__button:hover {
    box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.1);
}
body > #root > footer .go__to__top__button .go__to__top__link .go__to__top__icon::before {
    z-index: 10;
    content: '';
    width: 20px;
    height: 1px;
    background-color: var(--navigate-to-top-button-border);
    transform: rotate(-45deg);
    position: absolute;
    top: 35px;
    left: 8px;
}
body.dark > #root > footer .go__to__top__button .go__to__top__link .go__to__top__icon::before {
    background-color: var(--dark__navigate-to-top-button-border);
}
body > #root > footer .go__to__top__button .go__to__top__link .go__to__top__icon::after {
    z-index: 10;
    content: '';
    width: 20px;
    height: 1px;
    background-color: var(--navigate-to-top-button-border);
    transform: rotate(45deg);
    position: absolute;
    top: 35px;
    right: 8px;
}
body.dark > #root > footer .go__to__top__button .go__to__top__link .go__to__top__icon::after {
    background-color: var(--dark__navigate-to-top-button-border);
}
body > #root > footer .go__to__top__button:hover .go__to__top__icon::before,
body > #root > footer .go__to__top__button:hover .go__to__top__icon::after {
    animation: jumpUpAndBack 0.75s ease-in-out infinite;
}
@keyframes jumpUpAndBack {
    0% {
        top: 35px;
    }
    50% {
        top: 40px;
    }
    100% {
        top: 35px;
    }
}

body > #root > footer .footer__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

body > #root > footer .footer__container .footer__copy {
    min-width: 10rem;
    margin-left: 1rem;
}

body > #root > footer .footer__container .footer__links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
body > #root > footer .footer__container .footer__links::before {
    content: '';
    width: 1px;
    height: 25%;
    background: var(--text__color);
    margin-right: 1rem;
}
body.dark > #root > footer .footer__container .footer__links::before {
    background: var(--dark__text__color);
}
body > #root > footer .footer__container .footer__links a {
    text-decoration: none;
    margin-right: 2rem;
    z-index: 15;
}
body > #root > footer .footer__container .footer__links .footer__link svg {
    font-size: 1.25rem;
}
body > #root > footer .footer__container .footer__links .footer__link {
    margin: auto 1rem;
    color: var(--text__color);
}
body.dark > #root > footer .footer__container .footer__links .footer__link {
    color: var(--dark__text__color);
}
body > #root > footer .footer__container .footer__links .logo {
    width: 5rem;
    height: auto;
}
body > #root > footer .footer__container .footer__links .logo.github {
    filter: invert(1);
}
body.dark > #root > footer .footer__container .footer__links .logo.github {
    filter: invert(0);
}
body.dark > #root > footer .footer__container .footer__links .logo.linkedin {
    filter: invert(1);
}
</style>
