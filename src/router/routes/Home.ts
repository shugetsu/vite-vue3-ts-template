import { RouteRecordRaw } from 'vue-router'
import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
import { useI18n } from '/@/hooks/web/useI18n'

const { tKey } = useI18n()

/**
 * @description 首页
 */
export const Home: RouteRecordRaw = {
  path: RouterRoutePathEnum.HOME,
  name: RouterRouteNameEnum.HOME,
  component: () => import('/@/views/Home/index.vue'),
  meta: {
    title: tKey('home')
  }
}
