/**
 * @date 2022-01-10 09:59:37
 * @lastEditTime 2022-01-14 14:55:58
 * @description Http
 * @filePath /src/utils/axios/lib/Http.ts
 */

import type { AxiosInstance } from 'axios'
import type { Ref } from 'vue'
import type { VAxiosAliasRequestConfig, VAxiosHttpCancelInstance, VAxiosRequestConfig, VAxiosResponse } from '.'
import { forIn, merge } from 'lodash-es'
import { ref } from 'vue'
import { ContentTypeEnum } from '/@/datas/enums/ContentTypeEnum'
import Axios from 'axios'

export default class Http {
  private readonly cancelKey: Symbol = Symbol('CANCEL_KEY')

  readonly loading: Ref<boolean> = ref(false)

  constructor(
    private readonly axiosInstance: AxiosInstance,
    private readonly httpCancelInstance: VAxiosHttpCancelInstance
  ) {
    // 防止外部使用 bind、call、apply、解构等操作导致丢失 this 指向
    const http = this!
    const { cancel, request, get, post, put, delete: del, upload } = this
    forIn({ cancel, request, get, post, put, delete: del, upload }, (v: Fn, k) => {
      this[k] = function (...args: any[]) {
        return v.apply(http, args)
      }
    })
  }

  /**
   * @description 取消请求
   */
  cancel() {
    this.httpCancelInstance.removePending(this.cancelKey)
  }

  /**
   * @description 发送请求
   * @param {VAxiosRequestConfig} config
   */
  request<T = any>(config: VAxiosRequestConfig) {
    this.loading.value = true

    config.cancelToken ??= new Axios.CancelToken((cancel) => {
      const message = `[${config.method}]${config.url}`
      this.httpCancelInstance.addPending(this.cancelKey, cancel.bind(null, message))
    })

    return new Promise<VAxiosResponse<T>>((resolve, reject) => {
      this.axiosInstance
        .request(config)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.loading.value = false
          this.cancel()
        })
    })
  }

  /**
   * @description 发送 GET 请求
   * @param {VAxiosAliasRequestConfig} config
   */
  get<T = any>(config: VAxiosAliasRequestConfig) {
    this.request<T>({ ...config, method: 'GET' })
  }

  /**
   * @description 发送 POST 请求
   * @param {VAxiosAliasRequestConfig} config
   */
  post<T = any>(config: VAxiosAliasRequestConfig) {
    this.request<T>({ ...config, method: 'POST' })
  }

  /**
   * @description 发送 PUT 请求
   * @param {VAxiosAliasRequestConfig} config
   */
  put<T = any>(config: VAxiosAliasRequestConfig) {
    this.request<T>({ ...config, method: 'PUT' })
  }

  /**
   * @description 发送 DELETE 请求
   * @param {VAxiosAliasRequestConfig} config
   */
  delete<T = any>(config: VAxiosAliasRequestConfig) {
    this.request<T>({ ...config, method: 'DELETE' })
  }

  /**
   * @description 上传文件
   * @param {VAxiosAliasRequestConfig} config
   */
  upload<T = any>(config: VAxiosAliasRequestConfig) {
    const formData = new FormData()
    forIn(config.data, (v, k) => formData.append(k, v))
    const coverConfig: VAxiosRequestConfig = {
      data: formData,
      headers: merge(config.headers, {
        'Content-Type': ContentTypeEnum.FORM_DATA
      })
    }
    return this.post<T>({ ...config, ...coverConfig })
  }
}
