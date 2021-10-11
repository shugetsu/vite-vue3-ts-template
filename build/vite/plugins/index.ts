import type { Plugin } from 'vite'
import type { EnvConfigService } from '/%/utils/EnvConfigService'
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
  viteEnv: EnvConfigService<ViteEnv>
): Undefinable<Plugin | Plugin[]>[] {
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
    visualizerPluginConfig(isBuild)
  ]
}
