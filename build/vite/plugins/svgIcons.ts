/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2022-03-19 10:35:30
 * @description 生成 svg 雪碧图
 * @filePath /build/vite/plugins/svgIcons.ts
 * @see https://github.com/anncwb/vite-plugin-svg-icons
 */

import type { Plugin } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { pathResolve } from '/%/utils'

export function svgIconsPluginConfig(isBuild: boolean): Plugin {
  return createSvgIconsPlugin({
    iconDirs: [pathResolve('src/assets/common/icons')],
    svgoOptions: isBuild,
    symbolId: 'icon-[dir]-[name]'
  })
}
