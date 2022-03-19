import type { Plugin, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { htmlPluginConfig } from './html'
import { imageminPluginConfig } from './imagemin'
import { svgIconsPluginConfig } from './svgIcons'
import { windicssPluginConfig } from './windicss'
import { purgeIconsPluginConfig } from './purgeIcons'
import { compressionPluginConfig } from './compression'
import { pwaPluginConfig } from './pwa'
import { visualizerPluginConfig } from './visualizer'

export function vitePluginsConfig(
  isBuild: boolean,
  viteEnv: ViteEnv
): Undefinable<Plugin | Plugin[] | PluginOption | PluginOption[]>[] {
  return [
    vue(),
    vueJsx(),
    purgeIconsPluginConfig(),
    windicssPluginConfig(),
    imageminPluginConfig(isBuild),
    compressionPluginConfig(isBuild),
    htmlPluginConfig(isBuild, viteEnv),
    svgIconsPluginConfig(isBuild),
    pwaPluginConfig(viteEnv),
    visualizerPluginConfig()
  ]
}
