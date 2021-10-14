import type { LocaleEnum } from '/@/datas/enums/LocaleEnum'

type LocaleMessages = Record<string, string>

// 存放已加载的区域
const loadedLocaleMap: Map<LocaleEnum, LocaleMessages> = new Map()

/**
 * @description 动态加载区域消息
 * @param {LocaleEnum} locale
 * @return {Promise<LocaleMessages>}
 */
export async function dynamicLocaleMessages(locale: LocaleEnum): Promise<LocaleMessages> {
  if (loadedLocaleMap.has(locale)) {
    return loadedLocaleMap.get(locale) as LocaleMessages
  }

  try {
    const messages = (await import(`../../locales/langs/${locale}.json`))?.default
    loadedLocaleMap.set(locale, messages)
    return messages
  } catch {
    return {}
  }
}
