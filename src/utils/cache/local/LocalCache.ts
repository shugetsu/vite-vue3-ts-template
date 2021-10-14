/**
 * @date 2021-10-12 11:55:16
 * @lastEditTime 2021-10-14 15:59:00
 * @description 本地缓存
 * @filePath /src/utils/cache/local/LocalCache.ts
 */

import { getN, getNV, getNVK, isExpire } from './utils'

export interface LocalCacheOptions {
  /**
   * @description 命名空间
   */
  namespace: string
  /**
   * @description 版本号
   */
  version: string
}

export interface RawData<T = any> {
  /**
   * @description 命名空间
   */
  n: string
  /**
   * @description 版本号
   */
  v: string
  /**
   * @description 缓存写入的时间
   */
  t: number
  /**
   * @description 缓存有效期
   */
  ttl: number
  /**
   * @description 缓存键
   */
  key: string
  /**
   * @description 缓存值
   */
  value: T
}

export interface CacheOptions {
  /**
   * @description 缓存有效期，0为永不过期（单位/毫秒）
   * @default 0
   */
  ttl?: number
}

export class LocalCache {
  private readonly storage = localStorage

  private get version() {
    return this.options.version
  }

  private get namespace() {
    return this.options.namespace
  }

  constructor(private readonly options: LocalCacheOptions) {}

  /**
   * @description 设置缓存
   * @param {string} key
   * @param {T} value
   * @param {CacheOptions} opts
   * @return {void}
   */
  set<T>(key: string, value: T, opts?: CacheOptions): void {
    const cacheData: RawData<T> = {
      n: this.namespace,
      v: this.version,
      t: Date.now(),
      ttl: opts?.ttl ?? 0,
      key,
      value
    }
    const nvk = getNVK(this.namespace, this.version, cacheData.key)
    this.storage.setItem(nvk, JSON.stringify(cacheData))
  }

  /**
   * @description 获取缓存
   * @param {string} key
   * @param {T} defValue
   * @return {Nullable<T>}
   */
  get<T>(key: string): Nullable<T>
  get<T>(key: string, defValue: T): T
  get<T>(key: string, defValue: Nullable<T> = null): Nullable<T> {
    const nvk = getNVK(this.namespace, this.version, key)
    const cacheData = this.storage.getItem(nvk)

    if (!cacheData) {
      return defValue
    }

    try {
      const { value, t, ttl } = JSON.parse(cacheData) as RawData<T>

      if (isExpire(t, ttl)) {
        this.storage.removeItem(nvk)
        return defValue
      }

      return value
    } catch {
      this.storage.removeItem(nvk)
      return defValue
    }
  }

  /**
   * @description 是否有某个缓存
   * @param {string} key
   * @returns {boolean}
   */
  has(key: string): boolean {
    const nvk = getNVK(this.namespace, this.version, key)
    const cacheData = this.storage.getItem(nvk)
    return !!cacheData
  }

  /**
   * @description 删除缓存
   * @param {string} key
   * @return {void}
   */
  remove(key: string): void {
    const nvk = getNVK(this.namespace, this.version, key)
    this.storage.removeItem(nvk)
  }

  /**
   * @description 清空当前版本的缓存
   * @return {void}
   */
  clear(): void {
    const nvReg = new RegExp(`^${getNV(this.namespace, this.version)}`)

    for (const nvk in this.storage) {
      if (nvReg.test(nvk)) {
        this.storage.removeItem(nvk)
      }
    }
  }

  /**
   * @description 清空旧版本的缓存
   * @return {void}
   */
  clearOld(): void {
    const nReg = new RegExp(`^${getN(this.namespace)}`)
    const nvReg = new RegExp(`^${getNV(this.namespace, this.version)}`)

    for (const nvk in this.storage) {
      if (nReg.test(nvk) && !nvReg.test(nvk)) {
        this.storage.removeItem(nvk)
      }
    }
  }
}
