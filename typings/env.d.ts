/**
 * @description App 环境变量
 */
declare type AppEnv = RemoveIndex<ImportMetaEnv> & ViteEnv

/**
 * @description Vite 环境变量
 */
declare type ViteEnv = {
  /**
   * @description 端口号
   */
  VITE_PORT: number
  /**
   * @description 公共路径
   */
  VITE_PUBLIC_PATH: string
  /**
   * @description app 名称
   */
  VITE_APP_NAME: string
  /**
   * @description app 命名空间
   */
  VITE_APP_NAMESPACE: string
  /**
   * @description 是否使用 pwa
   */
  VITE_IS_USE_PWA: boolean
  /**
   * @description pwa app 简称
   */
  VITE_PWA_APP_SHORT_NAME: string
  /**
   * @description 跨域代理
   */
  VITE_PROXY: [string, string][]
  /**
   * @description LocalCache 版本号
   */
  VITE_LOCAL_CACHE_VERSION: string
  /**
   * @description 日志级别
   */
  VITE_LOGGER_LEVEL: 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'SILENT'
}
