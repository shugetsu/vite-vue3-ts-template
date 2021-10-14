import { createLocalCache } from '/@/utils/cache'

const lCache = createLocalCache()

/**
 * @description 初始化项目
 * @return {void}
 */
export function initProject(): void {
  // 清空旧版本的缓存
  lCache.clearOld()
}
