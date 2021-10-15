import type { Slots, VNode } from 'vue'
import { isFunction, isUndefined } from 'lodash'
import { createLogger } from '../logger'

const logger = createLogger('tsx')

/**
 * @description 继承插槽
 * @param {Slots} slots
 * @param {string[]} excludeNames
 * @return {Slots}
 */
export function extendSlots(slots: Slots, excludeNames: string[] = []): Slots {
  const newSlots = {}

  for (const name in slots) {
    if (!excludeNames.includes(name)) {
      newSlots[name] = () => getSlot(slots, name)
    }
  }

  return newSlots
}

/**
 * @description 获取插槽
 * @param {Slots} slots
 * @param {string} name
 * @param {any} data
 * @return {Nullable<VNode[]>}
 */
export function getSlot(slots: Slots, name = 'default', data?: any): Nullable<VNode[]> {
  if (isUndefined(slots) || !isFunction(slots[name])) {
    logger.error(`'${name}' 插槽不是一个函数`)
    return null
  }
  const slot = slots[name] as Function
  return slot(data)
}
