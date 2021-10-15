import { useRouter } from 'vue-router'
import { createAppEnvConfigService } from '/%/utils'
import { useTitle } from '@vueuse/core'
import { watch } from 'vue'
import { useLocale } from './useLocale'
import { useI18n } from './useI18n'

const appEnv = createAppEnvConfigService()

/**
 * @description html 标题
 */
export function useHtmlTitle() {
  const { locale } = useLocale()
  const { currentRoute } = useRouter()
  const { t } = useI18n()
  const htmlTitle = useTitle()

  // 监听路由和区域变化，动态更改 html 标题
  watch([() => currentRoute.value.path, locale], () => {
    const appName = appEnv.VITE_APP_NAME
    const routeTitle = (currentRoute.value?.meta?.title as string) ?? ''
    htmlTitle.value = routeTitle ? `${t(routeTitle)} - ${appName}` : appName
  })
}
