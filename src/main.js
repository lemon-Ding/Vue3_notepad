import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./assets/css/normalize.css"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import pinia from "./stores"
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
