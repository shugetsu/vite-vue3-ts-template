import { setupStore } from './store'
import { createApp } from 'vue'
import App from './App.vue'

import '@purge-icons/generated'
import 'virtual:svg-icons-register'
import 'virtual:windi.css'

const app = createApp(App)
// 安装 store
setupStore(app)

app.mount('#app')
