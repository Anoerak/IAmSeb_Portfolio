<script>
import Video from '../../assets/videos/glitch_4K.mp4'
import GlitchingText from '../../components/GlitchingText.vue'

export default {
  datas: () => ({
    Video
  }),
  components: {
    GlitchingText
  },
  mounted() {
    const letters =
      "0123456789ABCDEFGHIJKLMNOØPQRSTUVWXYZabcdefghijklmnoøpqrestuvwxyz!@#$%^&*()_+{}|:<>?/.,'"

    let interval = null
    const screen = document.querySelector('body'),
      title = document.querySelector('.title'),
      subtitle = document.querySelector('.subtitle'),
      message = document.querySelector('.message')

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

    screen.onload = () => {
      lettersEffect(title, 25)
      // We wait 1 second before starting the subtitle effect
      setTimeout(() => {
        lettersEffect(subtitle, 10)
      }, 250)
      // We wait 1 seconds before starting the message effect
      setTimeout(() => {
        lettersEffect(message, 5)
      }, 1250)
    }
  }
}
</script>

<template>
  <video autoplay="true" loop id="background_video">
    <source :src="Video" type="video/mp4" />
  </video>

  <div id="content">
    <div class="message__container">
      <!--<GlitchingText class="title" dataValue="404" text="***" tags="h1" />-->
      <h1 class="title" data-value="404">***</h1>
      <h2 class="subtitle" data-value="Oups, we can't find that page.">
        ******************************
      </h2>
      <p class="message" data-value="Why not stepping back to our Home page and try again?">
        ******************************************************
      </p>
    </div>
    <div class="back__button">
      <div class="button__border"></div>
      <RouterLink class="button__content" to="/"> Go back </RouterLink>
      <!-- 
		<a class="button__content" href="https://http.cat/404"> Go back </a>
	-->
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body>#root>.App>#background_video {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

body>#root>.App>#content {
  background: rgba(0, 0, 0, 0.5);
  color: var(--dark__text__color);
  padding: 2rem;
  height: 100%;
  margin-top: 5rem;
}

body>#root>.App>#content>.message__container>p::before,
body>#root>.App>#content>.message__container>p::after,
body>#root>.App>#content>.message__container>h1::before,
body>#root>.App>#content>.message__container>h1::after {
  right: 0;
}

body>#root>.App>#content>.message__container>h1::before,
body>#root>.App>#content>.message__container>h1::after,
body>#root>.App>#content>.message__container>h2::before,
body>#root>.App>#content>.message__container>h2::after,
body>#root>.App>#content>.message__container>p::before,
body>#root>.App>#content>.message__container>p::after {
  content: attr(data-value);
  position: absolute;
  left: 0;
}

body>#root>.App>#content>.message__container>h1 {
  text-align: center;
  font-size: 10rem;
  margin: 0;
  text-shadow: 0 0 10px white;
  animation: glitch 1s linear infinite;
}

body>#root>.App>#content>.message__container>h1::before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

body>#root>.App>#content>.message__container>h1::after {
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

body>#root>.App>#content>.message__container>h2 {
  font-size: 2rem;
  margin-top: 2rem;
  animation: glitch 1.5s linear infinite;
  width: fit-content;
}

body>#root>.App>#content>.message__container>h2::before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

body>#root>.App>#content>.message__container>h2::after {
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

body>#root>.App>#content>.message__container>p {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-right: 5rem;
  text-align: right;
  animation: glitch 2s linear infinite;
}

body>#root>.App>#content>.message__container>p::before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

body>#root>.App>#content>.message__container>p::after {
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

body>#root>.App>#content>.back__button {
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  height: 47px;
  width: 198px;
  border-radius: 2rem;
}

body>#root>.App>#content>.back__button>.button__border {
  position: relative;
  top: 0;
  left: 0;
  background-color: transparent;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  border-radius: 2rem;
  z-index: 6;
  transition: all 3.5s ease-in-out;
}

body>#root>.App>#content>.back__button>.button__border::before {
  cursor: pointer;
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 0;
  height: 0;
  border-radius: inherit;
  z-index: 6;
  animation: buttonBorderFadingIn 3.5s ease-in-out forwards;
}

body>#root>.App>#content>.back__button>.button__border::after {
  cursor: pointer;
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  border-radius: inherit;
  z-index: 6;
}

body>#root>.App>#content>.back__button>.button__content {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  line-height: 47px;
  text-align: center;
  display: inline-block;
  border-radius: inherit;
  text-decoration: none;
  color: var(--dark__text__color);
  opacity: 0;
  z-index: 10;
  animation: textFadingIn 3.5s ease-in-out forwards;
  transition: all 0.2s ease-in-out;
}

body>#root>.App>#content>.back__button>.button__content:hover {
  box-shadow: 0 0 5px 2.5px greenyellow;
}

@keyframes textFadingIn {
  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes buttonBorderFadingIn {
  0% {
    width: 0;
    height: 0;
  }

  33% {
    box-shadow: 0 0 10px 5px white;
  }

  50% {
    box-shadow: 0 0 15px 5px white;
    height: 0;
    width: calc(100%);
  }

  75% {
    box-shadow: 0 0 20px 10px white;
    width: calc(100%);
  }

  100% {
    box-shadow: 0 0 10px 0px white;
    width: calc(100%);
    height: calc(100%);
  }
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

@media screen and (max-width: 992px) {
  body>#root>.App>#content>.message__container>h1 {
    font-size: 5rem;
  }

  body>#root>.App>#content>.message__container>h2 {
    font-size: 1.5rem;
  }

  body>#root>.App>#content>.message__container>p {
    font-size: 1rem;
  }

  body>#root>.App>#content>.back__button {
    bottom: 2rem;
    left: 2rem;
    height: 30px;
    width: 130px;
  }

  body>#root>.App>#content>.back__button>.button__border {
    border-radius: 1rem;
  }

  body>#root>.App>#content>.back__button>.button__border::before {
    border-top: solid 1px white;
    border-left: solid 1px white;
    border-radius: inherit;
  }

  body>#root>.App>#content>.back__button>.button__border::after {
    border-bottom: solid 1px white;
    border-right: solid 1px white;
    border-radius: inherit;
  }

  body>#root>.App>#content>.back__button>.button__content {
    line-height: 30px;
    border-radius: inherit;
  }
}
</style>
