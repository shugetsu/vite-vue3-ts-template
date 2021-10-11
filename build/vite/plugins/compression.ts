/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2021-10-11 15:08:47
 * @description 资源压缩
 * @filePath /build/vite/plugins/compression.ts
 * @see https://github.com/anncwb/vite-plugin-compression
 */

import type { Plugin } from 'vite'
import compressionPlugin from 'vite-plugin-compression'

export function compressionPluginConfig(isBuild: boolean): Undefinable<Plugin[]> {
  if (isBuild) {
    return [
      compressionPlugin({
        algorithm: 'gzip',
        deleteOriginFile: false
      }),
      compressionPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: false
      })
    ]
  }
}
