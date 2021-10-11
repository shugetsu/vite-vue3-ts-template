/**
 * @date 2021-10-11 10:14:25
 * @lastEditTime 2021-10-11 15:10:02
 * @description 仅捆绑使用的图标
 * @filePath /build/vite/plugins/purgeIcons.ts
 * @see https://icones.netlify.app Icônes
 * @see https://icon-sets.iconify.design Iconify
 * @see https://github.com/antfu/purge-icons
 */

import type { Plugin } from 'vite'
import purgeIconsPlugin from 'vite-plugin-purge-icons'

export function purgeIconsPluginConfig(): Plugin {
  return purgeIconsPlugin()
}
