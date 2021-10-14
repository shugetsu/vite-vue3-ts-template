import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { createAppEnvConfigService } from '/%/utils'
import { useTitle } from '@vueuse/core'
import { watchEffect } from 'vue'

const appVite = createAppEnvConfigService()

/**
 * @description 监听路由和区域变化，自动更改页面标题
 */
export function useAutoChangePageTitle() {
  const { currentRoute } = useRouter()
  const { t } = useI18n()
  const pageTitle = useTitle()

  watchEffect(() => {
    const appName = appVite.VITE_APP_NAME
    const routeTitle = (currentRoute.value?.meta?.title as string) ?? ''
    pageTitle.value = routeTitle ? `${t(routeTitle)} - ${appName}` : appName
  })
}
