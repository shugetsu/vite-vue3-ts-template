import type { LocalCacheOptions } from './local/LocalCache'
import { LocalCache } from './local/LocalCache'
import { createAppEnvConfigService } from '/%/utils'

const appEnv = createAppEnvConfigService()

/**
 * @description 创建 LocalCache 本地缓存
 * @return {LocalCache}
 */
export function createLocalCache(lcOpts?: Partial<LocalCacheOptions>): LocalCache {
  const options: LocalCacheOptions = Object.assign(
    {
      namespace: appEnv.VITE_APP_NAMESPACE,
      version: appEnv.VITE_LOCAL_CACHE_VERSION
    },
    lcOpts
  )
  const lCache = new LocalCache(options)
  return lCache
}
