import { Ref } from 'vue'

declare global {
  /**
   * @description 可能为 Ref
   */
  type MaybeRef<T> = T | Ref<T>
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>

  interface HTMLAttributes extends WindiHTMLAttributes {}
}

/**
 * suppress ts:2669
 */
export {}
