/**
 * @date 2021-10-12 14:16:46
 * @lastEditTime 2021-10-13 14:39:40
 * @description 日志
 * @filePath /src/utils/logger/Logger.ts
 */

import * as logger from 'loglevel'

export class Logger {
  private readonly log: logger.Logger

  constructor(private readonly namespace: string) {
    this.log = logger.getLogger(Symbol(this.namespace))
  }

  /**
   * @description 设置日志级别
   * @param {LogLevelDesc} level
   * @param {boolean} persist
   * @return {Logger}
   */
  setLevel(level: logger.LogLevelDesc, persist?: boolean): Logger {
    this.log.setLevel(level, persist)
    return this
  }

  /**
   * @description 堆栈跟踪
   * @param {any[]} msg
   * @return {void}
   */
  trace(...msg: any[]): void {
    this.log.trace.apply(null, [this.namespace, ...msg])
  }

  /**
   * @description 调试
   * @param {any[]} msg
   * @return {void}
   */
  debug(...msg: any[]): void {
    this.log.debug.apply(null, [this.namespace, ...msg])
  }

  /**
   * @description 信息
   * @param {any[]} msg
   * @return {void}
   */
  info(...msg: any[]): void {
    this.log.info.apply(null, [this.namespace, ...msg])
  }

  /**
   * @description 警告
   * @param {any[]} msg
   * @return {void}
   */
  warn(...msg: any[]): void {
    this.log.warn.apply(null, [this.namespace, ...msg])
  }

  /**
   * @description 错误
   * @param {any[]} msg
   * @return {void}
   */
  error(...msg: any[]): void {
    this.log.error.apply(null, [this.namespace, ...msg])
  }
}
