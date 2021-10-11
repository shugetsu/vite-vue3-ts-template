/**
 * @date 2021-10-11 10:01:19
 * @lastEditTime 2021-10-11 10:02:13
 * @description windicss 配置
 * @filePath /windi.config.ts
 * @see https://windicss.org/guide/configuration.html
 */

import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: {
    prefix: 'v:'
  },
  darkMode: 'class'
})
