import { createApp } from 'vue'
import { createPinia } from 'pinia'
import eventBus from '@/plugins/eventBus';
import './style.css'
import Main from './Main.ce.vue'

import setupQuasar from './quasar'

const app = createApp(Main)
const pinia = createPinia()

// register eventbus plugin
pinia.use(eventBus)

app.use(pinia)
setupQuasar(app)
app.mount("#app")