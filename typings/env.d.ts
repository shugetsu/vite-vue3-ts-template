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
   * @description 站点名称
   */
  VITE_SITE_NAME: string
  /**
   * @description 项目命名空间
   */
  VITE_PROJECT_NAMESPACE: string
  /**
   * @description 是否使用 pwa
   */
  VITE_IS_USE_PWA: boolean
  /**
   * @description pwa app 名称
   */
  VITE_PWA_APP_NAME: string
  /**
   * @description pwa app 简称
   */
  VITE_PWA_APP_SHORT_NAME: string
  /**
   * @description 跨域代理
   */
  VITE_PROXY: [string, string][]
}
