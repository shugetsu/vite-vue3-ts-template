/**
 * @date 2021-11-04 14:28:47
 * @lastEditTime 2022-01-12 17:16:35
 * @description 拦截器
 * @filePath /src/utils/axios/lib/Interceptors.ts
 */

import type { AxiosInstance } from 'axios'
import type { VAxiosOnRejected, VAxiosRequestOnFulfilled, VAxiosResponseOnFulfilled } from '.'

export default class Interceptors {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  /**
   * @description 请求拦截
   * @param {VAxiosRequestOnFulfilled} onFulfilled
   * @param {VAxiosOnRejected} onRejected
   */
  request(onFulfilled?: VAxiosRequestOnFulfilled, onRejected?: VAxiosOnRejected) {
    onFulfilled ??= (config) => config
    onRejected ??= (error) => Promise.reject(error)
    this.axiosInstance.interceptors.request.use(onFulfilled, onRejected)
  }

  /**
   * @description 响应拦截
   * @param {VAxiosResponseOnFulfilled} onFulfilled
   * @param {VAxiosOnRejected} onRejected
   */
  response(onFulfilled?: VAxiosResponseOnFulfilled, onRejected?: VAxiosOnRejected) {
    onFulfilled ??= (response) => response
    onRejected ??= (error) => Promise.reject(error)
    this.axiosInstance.interceptors.response.use(onFulfilled, onRejected)
  }
}
