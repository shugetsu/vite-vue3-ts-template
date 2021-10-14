/**
 * @date 2021-10-12 11:54:02
 * @lastEditTime 2021-10-14 15:00:36
 * @description 区域 store
 * @filePath /src/store/modules/common/locale.ts
 */

import type { LocaleEnum } from '/@/datas/enums/LocaleEnum'
import { store } from '/@/store'
import { defineStore } from 'pinia'
import { LocaleSetting } from '/@/settings/LocaleSetting'
import { createLocalCache } from '/@//utils/cache'
import { CacheKeyEnum } from '/@/datas/enums/CacheKeyEnum'

const lCache = createLocalCache()

export const useLocaleStore = defineStore('common/locale', {
  state: () => ({
    /**
     * @description 区域
     */
    locale: lCache.get<LocaleEnum>(CacheKeyEnum.LOCALE, LocaleSetting.defaultLocale)
  }),
  getters: {
    /**
     * @description 区域 getter
     */
    localeGetter(): LocaleEnum {
      return this.locale
    }
  },
  actions: {
    /**
     * @description 设置区域
     * @param {LocaleEnum} locale
     */
    setLocale(locale: LocaleEnum) {
      this.locale = locale
      lCache.set(CacheKeyEnum.LOCALE, locale)
    }
  }
})

/**
 * @description 在 setup 函数外调用则需使用该函数
 */
export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
