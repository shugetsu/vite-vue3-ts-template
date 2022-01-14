/**
 * @date 2021-10-11 15:41:42
 * @lastEditTime 2022-01-14 15:50:54
 * @description 生产环境打包分析
 * @filePath /build/vite/plugins/visualizer.ts
 * @see https://github.com/btd/rollup-plugin-visualizer
 */

import type { Plugin } from 'vite'
import visualizerPlugin from 'rollup-plugin-visualizer'
import { isReportMode } from '/%/utils'

export function visualizerPluginConfig(): Undefinable<Plugin> {
  if (isReportMode()) {
    return visualizerPlugin({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    }) as Plugin
  }
}
