/**
 * @date 2022-01-10 09:59:37
 * @lastEditTime 2022-01-12 12:10:31
 * @description Http 取消
 * @filePath /src/utils/axios/lib/HttpCancel.ts
 */

import type { Canceler } from 'axios'
import { isFunction } from 'lodash-es'

export default class HttpCancel {
  private readonly pendingMap: Map<Symbol, Canceler> = new Map()

  /**
   * @description 添加 pending
   * @param {Symbol} cancelKey
   * @param {Canceler} canceler
   */
  addPending(cancelKey: Symbol, canceler: Canceler) {
    this.removePending(cancelKey)
    this.pendingMap.set(cancelKey, canceler)
  }

  /**
   * @description 移除 pending 的请求
   * @param {Symbol} cancelKey
   */
  removePending(cancelKey: Symbol) {
    if (!this.pendingMap.has(cancelKey)) {
      return
    }

    const canceler = this.pendingMap.get(cancelKey)
    isFunction(canceler) && canceler()
    this.pendingMap.delete(cancelKey)
  }

  /**
   * @description 移除所有 pending 的请求
   */
  removeAllPending() {
    this.pendingMap.forEach((canceler) => {
      isFunction(canceler) && canceler()
    })
    this.reset()
  }

  /**
   * @description 重置 pendingMap
   */
  reset() {
    this.pendingMap.clear()
  }
}
