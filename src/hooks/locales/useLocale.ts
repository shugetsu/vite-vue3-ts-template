import type { LocaleEnum } from '/@/datas/enums/LocaleEnum'
import { computed } from 'vue'
import { useLocaleStoreWithOut } from '/@/store/modules/common/locale'
import { i18n } from '/@/locales'
import { setHtmlLang } from '/@/utils/helpers/setHtmlLang'
import { dynamicLocaleMessages } from '/@/utils/helpers/dynamicLocaleMessages'
import { createLogger } from '/@/utils/logger'

const logger = createLogger('useLocale')

/**
 * @description 区域
 */
export function useLocale() {
  const localeStore = useLocaleStoreWithOut()
  const locale = computed<LocaleEnum>(() => localeStore.localeGetter)

  /**
   * @description 更改区域
   * @param {LocaleEnum} locale
   * @return {Promise<void>}
   */
  async function changeLocale(locale: LocaleEnum): Promise<void> {
    // 加载区域消息
    const messages = await dynamicLocaleMessages(locale)
    // 设置 locale store
    localeStore.setLocale(locale)
    // 设置 html 语言
    setHtmlLang(locale)
    // 添加 i18n 区域消息
    i18n.global.setLocaleMessage(locale, messages)
    // 更改 i18n 当前区域
    if (i18n.mode === 'legacy') {
      i18n.global.locale = locale
    } else {
      ;(i18n.global.locale as any).value = locale
    }
    logger.debug(`当前区域 '${locale}'`)
  }

  return {
    changeLocale,
    locale
  }
}
