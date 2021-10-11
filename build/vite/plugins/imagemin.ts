/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2021-10-11 15:09:25
 * @description 压缩图片
 * @filePath /build/vite/plugins/imagemin.ts
 * @see https://github.com/anncwb/vite-plugin-imagemin
 */

import type { Plugin } from 'vite'
import imageminPlugin from 'vite-plugin-imagemin'

export function imageminPluginConfig(isBuild: boolean): Undefinable<Plugin> {
  if (isBuild) {
    return imageminPlugin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 8
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  }
}
