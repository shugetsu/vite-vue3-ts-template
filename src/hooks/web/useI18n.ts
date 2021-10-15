import type { Composer, UseI18nOptions } from 'vue-i18n'
import { i18n } from '/@/locales'

/**
 * @description i18n
 */
export function useI18n<Options extends UseI18nOptions = UseI18nOptions>() {
  const i18nGlobal = i18n?.global as Composer<
    NonNullable<Options['messages']>,
    NonNullable<Options['datetimeFormats']>,
    NonNullable<Options['numberFormats']>,
    NonNullable<Options['locale']>
  >

  /**
   * @description 仅用于配合 vscode i18n-ally 插件
   * @param {string} key
   * @return {string}
   */
  function tKey(key: string): string {
    return key
  }

  return { ...i18nGlobal, tKey }
}
