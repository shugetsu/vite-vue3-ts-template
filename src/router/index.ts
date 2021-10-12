import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

/**
 * 路由实例
 */
export const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes
})

/**
 * @description 安装路由
 * @param {App} app
 * @return {void}
 */
export function setupRouter(app: App): void {
  app.use(router)
}
