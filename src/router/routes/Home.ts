import { RouteRecordRaw } from 'vue-router'
import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
import { tKey } from '/@/utils/helpers/tKey'

/**
 * 首页
 */
export const Home: RouteRecordRaw = {
  path: RouterRoutePathEnum.HOME,
  name: RouterRouteNameEnum.HOME,
  component: () => import('/@/views/Home/index.vue'),
  meta: {
    title: tKey('home')
  }
}
