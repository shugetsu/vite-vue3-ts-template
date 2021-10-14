import '@purge-icons/generated'
import 'virtual:svg-icons-register'
import 'virtual:windi.css'

import App from './App.vue'
import { createApp } from 'vue'
import { setupI18n } from './locales'
import { initProject } from './logics'
import { setupRouter } from './router'
import { setupStore } from './store'

async function bootstrap() {
  const app = createApp(App)

  // 安装 store
  setupStore(app)

  // 安装 router
  setupRouter(app)

  // 安装 i18n
  await setupI18n(app)

  // 初始化项目
  initProject()

  app.mount('#app')
}

bootstrap()
