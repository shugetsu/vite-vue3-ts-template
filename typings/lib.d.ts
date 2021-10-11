/**
 * @description 删除索引签名
 * @example
 * interface Example {
 *   [key: string]: any
 *   name: string
 * }
 *
 * type RemoveIndexExample = RemoveIndex<Example>
 *
 * type RemoveIndexExample = {
 *   name: string
 * }
 */
declare type RemoveIndex<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P]
}

/**
 * @description 将全部属性变为可选的
 * @example
 * interface Example {
 *   name: string
 *   feature: {
 *     weight: number
 *     height: number
 *   }
 * }
 *
 * type DeepPartialExample = DeepPartial<Example>
 *
 * type DeepPartialExample = {
 *   name?: string
 *   feature?: {
 *     weight?: number
 *     height?: number
 *   }
 * }
 */
declare type DeepPartial<T> = T extends Function ? T : T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

/**
 * @description 类型重写
 * @example
 * interface Example {
 *   name: string
 *   age: string
 * }
 *
 * type OverwriteExample = Overwrite<Example, {
 *   age: number
 * }>
 *
 * type OverwriteExample = {
 *   name: string
 *   age: number
 * }
 */
declare type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

/**
 * @description 可为 null
 */
declare type Nullable<T> = T | null

/**
 * @description 可为 undefined
 */
declare type Undefinable<T> = T | undefined
