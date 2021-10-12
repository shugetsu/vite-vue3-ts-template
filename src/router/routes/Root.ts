import { RouteRecordRaw } from 'vue-router'
import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * 根
 */
export const Root: RouteRecordRaw = {
  path: RouterRoutePathEnum.ROOT,
  name: RouterRouteNameEnum.ROOT,
  redirect: RouterRoutePathEnum.HOME
}
