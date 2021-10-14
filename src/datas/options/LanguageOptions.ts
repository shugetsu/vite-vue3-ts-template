/**
 * @date 2021-10-12 16:59:21
 * @lastEditTime 2021-10-13 14:32:37
 * @description 语言选项
 * @filePath /src/datas/options/LanguageOptions.ts
 */

import { LocaleEnum } from '../enums/LocaleEnum'

interface LanguageOption {
  /**
   * @description 文本
   */
  label: string
  /**
   * @description 区域值
   */
  value: LocaleEnum
}

export const LanguageOptions: Readonly<Record<LocaleEnum, LanguageOption>> = {
  [LocaleEnum.ZH_CN]: {
    label: '简体中文',
    value: LocaleEnum.ZH_CN
  },
  [LocaleEnum.EN_US]: {
    label: 'English',
    value: LocaleEnum.EN_US
  }
}
