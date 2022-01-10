import type VAxios from './VAxios'
import type Http from './Http'
import type HttpCancel from './HttpCancel'
import type Interceptors from './Interceptors'
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export declare interface VAxiosInstance extends VAxios {}

export declare interface VAxiosHttpInstance extends Http {}

export declare interface VAxiosHttpCancelInstance extends HttpCancel {}

export declare interface VAxiosInterceptorsInstance extends Interceptors {}

export declare interface VAxiosRequestConfig extends AxiosRequestConfig {}

export declare type VAxiosAliasRequestConfig = Omit<VAxiosRequestConfig, 'method'>

export declare type VAxiosResponse<T = any> = Overwrite<AxiosResponse<T>, { config: VAxiosRequestConfig }>

export declare type VAxiosError = Overwrite<AxiosError, { config: VAxiosRequestConfig; status: number }>

export declare type VAxiosOnRejected = (error: VAxiosError) => any

export declare type VAxiosRequestOnFulfilled<T = VAxiosRequestConfig> = (config: T) => T | Promise<T>

export declare type VAxiosResponseOnFulfilled<T = any> = (response: VAxiosResponse<T>) => any

/******************************************************************/
/******************* 以下声明是基于项目的扩展配置 *******************/
/******************************************************************/
