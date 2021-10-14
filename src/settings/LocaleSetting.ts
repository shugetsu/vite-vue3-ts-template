/**
 * @date 2021-10-12 11:31:19
 * @lastEditTime 2021-10-13 14:33:09
 * @description 区域设置
 * @filePath /src/settings/LocaleSetting.ts
 */

import { LocaleEnum } from '/@/datas/enums/LocaleEnum'

export const LocaleSetting = <const>{
  /**
   * @description 默认区域
   */
  defaultLocale: LocaleEnum.ZH_CN,
  /**
   * @description 回退区域
   */
  fallbackLocale: LocaleEnum.ZH_CN,
  /**
   * @description 可用区域列表
   */
  availableLocales: [LocaleEnum.EN_US, LocaleEnum.ZH_CN]
}
