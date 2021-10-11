/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2021-10-11 15:09:05
 * @description html 压缩 和 ejs 模板插件
 * @filePath /build/vite/plugins/html.ts
 * @see https://github.com/anncwb/vite-plugin-html
 */

import type { Plugin } from 'vite'
import type { EnvConfigService } from '/%/utils/EnvConfigService'
import htmlPlugin from 'vite-plugin-html'

export function htmlPluginConfig(isBuild: boolean, viteEnv: EnvConfigService<ViteEnv>): Undefinable<Plugin[]> {
  return htmlPlugin({
    minify: isBuild,
    inject: {
      injectData: {
        title: viteEnv.get('VITE_SITE_NAME')
      }
    }
  })
}
