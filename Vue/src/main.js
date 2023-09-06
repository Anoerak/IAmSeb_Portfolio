import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScrollTo from 'vue-scrollto'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import config so we can set a default style
import { config } from '@fortawesome/fontawesome-svg-core'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

config.styleDefaults = 'duotone'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueScrollTo, {
    duration: 500,
    easing: 'ease',
    offset: -100
})
app.use(createPinia())
app.use(router)

app.mount('#root')
