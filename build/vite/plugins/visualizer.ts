/**
 * @date 2021-10-11 15:41:42
 * @lastEditTime 2021-10-11 15:43:48
 * @description 生产环境打包分析
 * @filePath /build/vite/plugins/visualizer.ts
 * @see https://github.com/btd/rollup-plugin-visualizer
 */

import type { Plugin } from 'vite'
import visualizerPlugin from 'rollup-plugin-visualizer'

export function visualizerPluginConfig(isBuild: boolean): Undefinable<Plugin> {
  if (isBuild) {
     return visualizerPlugin({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
}
