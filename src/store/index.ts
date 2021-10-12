import { App } from 'vue'
import { createPinia } from 'pinia'

/**
 * root store
 */
export const store = createPinia()

/**
 * @description 安装 vuex
 * @param {App} app
 */
export function setupStore(app: App) {
  app.use(store)
}
