import '@purge-icons/generated'
import 'virtual:svg-icons-register'
import 'virtual:windi.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

const app = createApp(App)
// 安装 store
setupStore(app)
// 安装 router
setupRouter(app)

app.mount('#app')
