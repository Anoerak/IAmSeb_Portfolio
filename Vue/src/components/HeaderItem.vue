<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import gsap from 'gsap'

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
        navbar.style.animation = 'fadingIn 0.5s ease-in-out forwards'
      }
    }
  })

  // On hover, the navbar reappears
  navbar.addEventListener('mouseenter', () => {
    if (window.innerWidth > 992 && window.pageYOffset !== 0) {
      navbar.style.animation = 'fadingIn 0.5s ease-in-out forwards'
    }
  })
  /* #endregion */

  /* #region  Dark Mode */
  // Dark Mode based on user settings
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !document.body.classList.contains('dark')
  ) {
    document.body.classList.add('dark')
    document.getElementsByTagName('header')[0].classList.add('dark')
  }

  // Watch for changes in the user settings.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('dark')
      document.getElementsByTagName('header')[0].classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.getElementsByTagName('header')[0].classList.remove('dark')
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
      tl.to('nav', { right: 0, top: '50vh' })
        .to('nav', { height: '100vh', top: window.pageYOffset }, '-=.1')
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
    if (window.innerWidth < 992) {
      window.scrollTo(0, 0)
    }
  })
  /* #endregion */
})

// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <header id="header">
    <div class="hamburger__menu__container">
      <div class="hamburger__menu__icon"></div>
    </div>

    <h1>Cool Navbar Effect</h1>

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

<style scoped>
header {
  margin: auto;
  /* overflow: hidden; */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 10rem;
}

header > h1,
header.dark > h1 {
  z-index: 1;
}

header > nav > h2 {
  opacity: 0;
}

/*
|--------------------------------------
| Navbar + Hover Effect + Dark Mode
|--------------------------------------
*/

header.dark > nav {
  background-color: var(--dark__bg__color);
}
header > nav {
  position: fixed;
  width: 80%;
  border-radius: 5rem;
}

header.dark > nav > .menu__ul {
  background-color: var(--dark__bg__color);
}
header > nav > .menu__ul {
  height: 100%;
  background-color: var(--bg__color);
  border-radius: 2rem;
  /* overflow: hidden; */
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin: 0;
  padding: 0;
}

header.dark > nav > .menu__ul > .menu__li {
  background-color: var(--dark__li__bg__color);
  box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.1);
}
header > nav > .menu__ul > .menu__li {
  margin: 0;
  width: 25%;
  background-color: var(--li__bg__color);
  text-align: center;
  vertical-align: middle;
  line-height: 3.5rem;
  position: relative;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
}

header > nav > .menu__ul > .menu__li:nth-child(1) {
  border-radius: 5rem 1rem 1rem 5rem;
}

header > nav > .menu__ul > .menu__li:nth-child(2),
header > nav > .menu__ul > .menu__li:nth-child(3) {
  border-radius: 0.25rem;
}

header > nav > .menu__ul > .menu__li:nth-child(4) {
  border-radius: 1rem 5rem 5rem 1rem;
}

header > nav > .menu__ul:hover > .menu__li > .li__border {
  opacity: 1;
}

header > nav > .menu__ul > .menu__li:hover::before {
  opacity: 1;
}

header > nav > .menu__ul > .menu__li::before,
header > nav > .menu__ul > .menu__li > .li__border {
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

header.dark > nav > .menu__ul > .menu__li::before {
  background: radial-gradient(
    700px circle at var(--mouse-x) var(--mouse-y),
    var(--dark__li__hovered),
    transparent 40%
  );
  z-index: 3;
}
header > nav > .menu__ul > .menu__li::before {
  background: radial-gradient(
    700px circle at var(--mouse-x) var(--mouse-y),
    var(--li__hovered),
    transparent 40%
  );
  z-index: 3;
}

header.dark > nav > .menu__ul > .menu__li > .li__border {
  background: radial-gradient(
    350px circle at var(--mouse-x) var(--mouse-y),
    var(--dark__li__border__hovered),
    transparent 40%
  );
  z-index: 1;
}
header > nav > .menu__ul > .menu__li > .li__border {
  background: radial-gradient(
    350px circle at var(--mouse-x) var(--mouse-y),
    var(--li__border__hovered),
    transparent 40%
  );
  z-index: 1;
}

header.dark > nav > .menu__ul > .menu__li > .li__content {
  background-color: var(--dark__nav__bg__color);
}
header > nav > .menu__ul > .menu__li > .li__content {
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

header.dark > nav > .menu__ul > .menu__li > .li__content > a {
  color: var(--dark__text__color);
}
header > nav > .menu__ul > .menu__li > .li__content > a {
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

@media screen and (max-width: 992px) {
  header {
    min-height: 10rem;
    justify-content: center;
  }
  header > h1 {
    font-size: 1rem;
  }
  header > section > h2 {
    font-size: 0.85rem;
  }
  header > section span {
    font-size: 0.75rem;
  }

  /* Hamburger Menu Icon */
  header > .hamburger__menu__container {
    cursor: pointer;
    position: fixed;
    top: 5%;
    right: 5%;
    width: 30px;
    height: 20px;
    text-align: initial;
  }

  header.dark > .hamburger__menu__container > .hamburger__menu__icon {
    background: var(--dark__text__color);
  }
  header > .hamburger__menu__container > .hamburger__menu__icon {
    width: 30px;
    height: 4px;
    background: var(--text__color);
  }

  header.dark > .hamburger__menu__container > .hamburger__menu__icon::before,
  header.dark > .hamburger__menu__container > .hamburger__menu__icon::after {
    background: var(--dark__text__color);
  }
  header > .hamburger__menu__container > .hamburger__menu__icon::before,
  header > .hamburger__menu__container > .hamburger__menu__icon::after {
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
  header > nav,
  header.dark > nav {
    position: absolute;
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
    z-index: 2;
  }

  header > nav > .menu__ul,
  header.dark > nav > .menu__ul {
    list-style: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--text__color);
    border-radius: 0;
    width: inherit;
  }

  header > nav > .menu__ul > .menu__li:nth-child(-n + 4),
  header.dark > nav > .menu__ul > .menu__li:nth-child(-n + 4) {
    margin: 50px 0;
    border: none;
    background-color: transparent;
    box-shadow: none;
    border-radius: 2rem;
  }

  header > nav > .menu__ul > .menu__li > .li__content,
  header.dark > nav > .menu__ul > .menu__li > .li__content {
    background-color: transparent;
  }

  header > nav > .menu__ul > .menu__li > .li__content > .li__link,
  header.dark > nav > .menu__ul > .menu__li > .li__content > .li__link,
  header > nav ul li a,
  header.dark > nav ul li a {
    color: var(--bg__color);
    background-color: transparent;
    font-size: 2em;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    opacity: 0;
    pointer-events: none;
  }

  header > nav ul li a:after {
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

  header > nav ul li a:hover:after {
    transform: scaleX(1);
  }

  header > nav .close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 6%;
    right: 5%;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
  }

  header > nav h2 {
    position: absolute;
    top: 5%;
    left: 5%;
    opacity: 0;
    pointer-events: none;
    color: #fff;
    font-size: 2em;
  }

  header > nav .close div::before,
  header > nav .close div::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background: #fff;
    transition: background 0.5s ease;
  }
  header > nav .close div::before {
    transform: rotate(-45deg);
  }

  header > nav .close div::after {
    transform: rotate(45deg);
  }

  header > nav .close:hover div::before,
  header > nav .close:hover div::after {
    background: rgb(209, 3, 3);
  }
}
</style>
