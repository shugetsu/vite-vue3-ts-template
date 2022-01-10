import type { VAxiosRequestConfig, VAxiosError, VAxiosResponse } from './lib'
import Axios from 'axios'
import VAxios from './lib'
import { getHttpStatusMessage } from './helpers/getHttpStatusMessage'

/**
 * @description 创建 VAxios
 * @param {VAxiosRequestConfig} config
 */
export function createVAxios(config: VAxiosRequestConfig) {
  const vAxios = new VAxios(config)
  // 请求拦截
  vAxios.interceptors.request(requestFulfilled, requestOnRejected)
  // 响应拦截
  vAxios.interceptors.response(responseFulfilled, responseOnRejected)
  return vAxios
}

/**
 * @description 请求 Fulfilled 拦截
 * @param {VAxiosRequestConfig} config
 */
function requestFulfilled(config: VAxiosRequestConfig) {
  return config
}

/**
 * @description 请求 Rejected 拦截
 * @param {VAxiosError} error
 */
function requestOnRejected(error: VAxiosError) {
  return Promise.reject(error)
}

/**
 * @description 响应 Fulfilled 拦截
 * @param {VAxiosResponse} response
 */
function responseFulfilled(response: VAxiosResponse) {
  return response
}

/**
 * @description 响应 Rejected 拦截
 * @param {VAxiosError} error
 */
function responseOnRejected(error: VAxiosError) {
  if (Axios.isAxiosError(error)) {
    const { status } = error.toJSON() as VAxiosError
    const message = getHttpStatusMessage(status)
    console.log(message)
  }
  return Promise.reject(error)
}
