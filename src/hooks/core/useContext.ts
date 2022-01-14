import { inject, provide } from 'vue'

type UseContextReturn<T> = [(payload: T) => void, () => Nullable<T>]

interface CreateContextOptions {
  /**
   * @description 是否为严格模式
   * @default true
   */
  strict?: boolean
  /**
   * @description 错误消息
   * @default `useInject: 'context' 未定义，似乎您忘记在 Provider 中包装组件了`
   */
  errorMessage?: string
  /**
   * @description 上下文名
   * @default 'context'
   */
  name?: string
}

/**
 * @description 上下文
 */
export function useContext<T>(options: CreateContextOptions = {}) {
  const {
    strict = true,
    errorMessage = `useContext: 'context' 未定义，似乎您忘记在 Provider 中包装组件了`,
    name = 'context'
  } = options

  const ctxSymbol = Symbol(`${name}Symbol`)

  /**
   * @description 提供者
   * @param {T} payload
   * @return {void}
   */
  function provider(payload: T): void {
    provide<T>(ctxSymbol, payload)
  }

  /**
   * @description 注入
   * @return {Nullable<T>}
   */
  function useInject(): Nullable<T> {
    const ctx = inject(ctxSymbol, null)

    if (!ctx && strict) {
      throw new Error(errorMessage)
    }

    return ctx
  }

  return [provider, useInject] as UseContextReturn<T>
}
