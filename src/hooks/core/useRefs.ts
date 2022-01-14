import type { Ref } from 'vue'
import { onBeforeUpdate, ref } from 'vue'

/**
 * @description refs
 */
export function useRefs() {
  const refs = ref([]) as Ref<HTMLElement[]>

  onBeforeUpdate(() => (refs.value = []))

  /**
   * @description 设置 refs
   * @param {number} index
   * @return {(el: HTMLElement) => void}
   */
  function setRefs(index: number): (el: HTMLElement) => void {
    return (el: HTMLElement) => {
      refs.value[index] = el
    }
  }

  return [refs, setRefs]
}
