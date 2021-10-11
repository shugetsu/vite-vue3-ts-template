/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2021-10-11 16:32:39
 * @description 环境变量服务
 * @filePath /build/utils/EnvConfigService.ts
 */

export class EnvConfigService<T extends ViteEnv | AppEnv> {
  constructor(private readonly env: T) {
    this.env['VITE_PORT'] = this.toNum('VITE_PORT')
    this.env['VITE_IS_USE_PWA'] = this.toBool('VITE_IS_USE_PWA')
    this.env['VITE_PROXY'] = this.toObj('VITE_PROXY')
  }

  /**
   * @description 转 boolean
   * @param {string} key
   * @return {boolean}
   */
  private toBool(key: string): boolean {
    const value = this.env[key] as unknown as string
    if (value !== 'true' && value !== 'false') {
      throw new Error(`'${key}' 只能为 boolean 类型`)
    }
    return value === 'true'
  }

  /**
   * @description 转 number
   * @param {string} key
   * @return {number}
   */
  private toNum(key: string): number {
    const value = Number(this.env['VITE_PORT'])
    if (isNaN(value)) {
      throw new Error(`'${key}' 只能为 number 类型`)
    }
    return value
  }

  /**
   * @description 转 object
   * @param {string} key
   * @returns {T}
   */
  private toObj<T>(key: string): T {
    try {
      const value = JSON.parse(this.env[key])
      return value
    } catch {
      throw new Error(`'${key}' 只能为 object 类型`)
    }
  }

  /**
   * @description 获取环境变量
   * @param {K} key
   * @return {T[K]}
   */
  get<K extends keyof T>(key: K): T[K] {
    const value = this.env[key]
    if (value === undefined) {
      throw new Error(`找不到该 '${key}' 环境变量`)
    }
    return value
  }
}
