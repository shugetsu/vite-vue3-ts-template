import type { AxiosInstance } from 'axios'
import type { VAxiosHttpCancelInstance, VAxiosInterceptorsInstance, VAxiosRequestConfig } from '.'
import Axios from 'axios'
import Http from './Http'
import HttpCancel from './HttpCancel'
import Interceptors from './Interceptors'

export default class VAxios {
  private readonly axiosInstance: AxiosInstance

  private readonly httpCancelInstance: VAxiosHttpCancelInstance

  readonly interceptors: VAxiosInterceptorsInstance

  constructor(config: VAxiosRequestConfig) {
    this.axiosInstance = Axios.create(config)
    this.httpCancelInstance = new HttpCancel()
    this.interceptors = new Interceptors(this.axiosInstance)
  }

  /**
   * @description http
   */
  useHttp() {
    return new Http(this.axiosInstance, this.httpCancelInstance)
  }

  /**
   * @description 取消全部 pending 的请求
   */
  cancelAllPendingRequest() {
    this.httpCancelInstance.removeAllPending()
  }
}
