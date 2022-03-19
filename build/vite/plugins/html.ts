/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2022-03-19 11:06:45
 * @description html 压缩 和 ejs 模板插件
 * @filePath /build/vite/plugins/html.ts
 * @see https://github.com/anncwb/vite-plugin-html
 */

import type { PluginOption } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export function htmlPluginConfig(isBuild: boolean, viteEnv: ViteEnv): PluginOption[] {
  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: viteEnv.VITE_APP_NAME
      }
    }
  })
}
