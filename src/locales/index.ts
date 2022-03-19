import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { LocaleSetting } from '/@/settings/LocaleSetting'
import { setHtmlLang } from '/@/utils/helpers/setHtmlLang'
import { dynamicLocaleMessages } from '/@/utils/helpers/dynamicLocaleMessages'
import { useLocale } from '/@/hooks/web/useLocale'

/**
 * @description i18n
 */
export let i18n: ReturnType<typeof createI18n>

/**
 * @description 安装 i18n
 * @param {App} app
 * @return {Promise<void>}
 */
export async function setupI18n(app: App): Promise<void> {
  const { locale } = useLocale()
  // 设置 html 语言
  setHtmlLang(locale.value)
  // 加载区域消息
  const messages = await dynamicLocaleMessages(locale.value)
  // i18n 配置
  const options = {
    legacy: false, // 使用 composition API 模式
    locale: locale.value, // 区域
    availableLocales: LocaleSetting.availableLocales, // 可选的地区列表
    fallbackLocale: LocaleSetting.fallbackLocale, // 区域首选项缺少翻译时使用该备选区域翻译
    fallbackWarn: true, // 使用备选区域时打印警告
    missingWarn: false, // 初始化失败时打印警告
    sync: true, // 如果不想从全局范围继承区域设置，需要将i18n组件选项的sync设置为false。
    silentTranslationWarn: true, // 关闭翻译警告
    silentFallbackWarn: true, // 关闭回退警告
    messages: {
      [locale.value]: messages
    }
  }
  i18n = createI18n(options)
  app.use(i18n)
}
