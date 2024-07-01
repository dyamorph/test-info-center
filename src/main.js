import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import globalComponents from './components'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(globalComponents)
app.use(createPinia())
app.use(router)

app.mount('#app')
