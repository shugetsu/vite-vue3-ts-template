import type { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import type { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
import type { Router, LocationAsPath, LocationAsRelativeRaw, RouteLocationOptions, RouteQueryAndHash } from 'vue-router'
import { useRouter } from 'vue-router'
import { createLogger } from '/@/utils/logger'

type RouteLocationRaw =
  | (RouteQueryAndHash & Overwrite<LocationAsPath, { path: RouterRoutePathEnum }> & RouteLocationOptions)
  | (RouteQueryAndHash & Overwrite<LocationAsRelativeRaw, { name: RouterRouteNameEnum }> & RouteLocationOptions)
  | RouterRoutePathEnum

const logger = createLogger('usePage')

/**
 * @description 处理错误
 * @param {Error} err
 * @return {void}
 */
function handleError(err: Error): void {
  logger.error(err)
}

/**
 * @description 页面
 */
export function usePage(router: Router = useRouter()) {
  const { push, replace } = router

  /**
   * @description 路由跳转
   * @param {RouteLocationRaw} to
   * @param {boolean} isReplace
   * @return {void}
   */
  function go(to: RouteLocationRaw, isReplace = false): void {
    if (!to) {
      return
    }
    isReplace ? replace(to).catch(handleError) : push(to).catch(handleError)
  }

  return { go }
}
