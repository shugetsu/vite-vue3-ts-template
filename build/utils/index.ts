import type { ProxyOptions } from 'vite'
import path from 'path'

/**
 * @description 根路径
 * @param {string} dir
 * @return {string}
 */
export function pathResolve(dir = ''): string {
  return path.resolve(process.cwd(), '.', dir)
}

/**
 * @description 创建代理
 * @param {array} proxies
 * @return {Record<string, ProxyOptions>}
 */
export function createProxy(proxies: [string, string][]): Record<string, ProxyOptions> {
  const proxy: Record<string, ProxyOptions> = {}

  if (!proxies) {
    return proxy
  }

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

/**
 * @description 创建 Vite 环境变量服务
 * @param {ViteEnv} env
 * @return {ViteEnv}
 */
export function createViteEnvConfigService(env: ViteEnv): ViteEnv {
  const viteEnv = createEnvConfigService<ViteEnv>(env)
  return viteEnv
}

/**
 * @description 创建 App 环境变量服务
 * @return {AppEnv}
 */
export function createAppEnvConfigService(): AppEnv {
  const env = import.meta.env as unknown as AppEnv
  const appEnv = createEnvConfigService<AppEnv>(env)
  return appEnv
}

/**
 * @description 创建环境变量服务
 * @param {T} env
 * @return {T}
 */
export function createEnvConfigService<T extends ViteEnv | AppEnv>(env: T): T {
  const envConfig = JSON.parse(JSON.stringify(env))

  // 转布尔类型的keys
  const boolKeys = ['VITE_IS_USE_PWA']
  // 转数字类型的keys
  const numKeys = ['VITE_PORT']
  // json转对象的keys
  const jsonKeys = ['VITE_PROXY']

  for (const key in envConfig) {
    const value = env[key]
    if (boolKeys.includes(key)) {
      envConfig[key] = value === 'true' ? true : value === 'false' ? false : value
    } else if (numKeys.includes(key)) {
      envConfig[key] = Number(value)
    } else if (jsonKeys.includes(key)) {
      try {
        envConfig[key] = JSON.parse(value)
      } catch {
        throw new Error(`'${key}' 转对象错误`)
      }
    }
  }

  return envConfig
}

/**
 * @description 是否生成包预览
 * @return {boolean}
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}
