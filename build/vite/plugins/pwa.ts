/**
 * @date 2021-10-11 11:04:25
 * @lastEditTime 2021-10-11 15:51:30
 * @description 生成 pwa 应用
 * @filePath /build/vite/plugins/pwa.ts
 * @see https://github.com/antfu/vite-plugin-pwa
 */

import type { Plugin } from 'vite'
import type { EnvConfigService } from '/%/utils/EnvConfigService'
import { VitePWA } from 'vite-plugin-pwa'

export function pwaPluginConfig(viteEnv: EnvConfigService<ViteEnv>): Undefinable<Plugin[]> {
  if (viteEnv.get('VITE_IS_USE_PWA')) {
    return VitePWA({
      manifest: {
        name: viteEnv.get('VITE_PWA_APP_NAME'),
        short_name: viteEnv.get('VITE_PWA_APP_SHORT_NAME'),
        icons: [
          {
            src: './resource/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './resource/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  }
}
