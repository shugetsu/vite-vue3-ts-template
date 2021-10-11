import type { ProxyOptions } from 'vite'
import path from 'path'
import { EnvConfigService } from './EnvConfigService'

/**
 * @description 根路径
 * @param {string} dir
 * @return {string}
 */
export function pathResolve(dir = ''): string {
  return path.resolve(process.cwd(), '.', dir)
}

/**
 * @description 创建 Vite 环境变量服务
 * @param {ViteEnv} env
 * @return {EnvConfigService<ViteEnv>}
 */
export function createViteEnvConfigService(env: ViteEnv): EnvConfigService<ViteEnv> {
  const viteEnv = new EnvConfigService<ViteEnv>(env)
  return viteEnv
}

/**
 * @description 创建 App 环境变量服务
 * @return {EnvConfigService<AppEnv>}
 */
export function createAppEnvConfigService(): EnvConfigService<AppEnv> {
  const env = import.meta.env as unknown as AppEnv
  const appEnv = new EnvConfigService<AppEnv>(env)
  return appEnv
}

/**
 * @description 创建代理
 * @param {array} proxies
 * @return {Record<string, ProxyOptions>}
 */
export function createProxy(proxies: [string, string][]): Record<string, ProxyOptions> {
  const proxy: Record<string, ProxyOptions> = {}

  for (const [prefix, target] of proxies) {
    proxy[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '')
    }
  }

  return proxy
}