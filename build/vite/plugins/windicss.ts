/**
 * @date 2021-10-11 09:50:24
 * @lastEditTime 2021-10-11 15:11:14
 * @description windicss
 * @filePath /build/vite/plugins/windicss.ts
 * @see https://windicss.org/integrations/vite.html
 */

import type { Plugin } from 'vite'
import windicssPlugin from 'vite-plugin-windicss'

export function windicssPluginConfig(): Plugin[] {
  return windicssPlugin({
    safelist: 'no-select',
    preflight: {
      enableAll: true
    }
  })
}
