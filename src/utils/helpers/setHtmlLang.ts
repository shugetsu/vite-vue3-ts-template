import type { LocaleEnum } from '/@/datas/enums/LocaleEnum'

/**
 * @description 设置 html 语言
 * @param {LocaleEnum} locale
 * @return {void}
 */
export function setHtmlLang(locale: LocaleEnum): void {
  document?.querySelector('html')?.setAttribute('lang', locale)
}
