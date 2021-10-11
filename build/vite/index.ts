import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { vitePluginsConfig } from './plugins'
import { createProxy, createViteEnvConfigService, pathResolve } from '../utils'

export function viteConfig({ command, mode }: ConfigEnv): UserConfig {
  const isBuild = command === 'build'
  const viteEnv = createViteEnvConfigService(loadEnv(mode, pathResolve()) as unknown as ViteEnv)

  return {
    base: viteEnv.get('VITE_PUBLIC_PATH'),
    assetsInclude: [pathResolve('src/assets')],
    plugins: vitePluginsConfig(isBuild, viteEnv),
    resolve: {
      alias: [
        { find: /\/@\//, replacement: pathResolve('src') + '/' },
        { find: /\/%\//, replacement: pathResolve('build') + '/' },
        { find: /\/#\//, replacement: pathResolve('typings') + '/' }
      ]
    },
    server: {
      host: true,
      port: viteEnv.get('VITE_PORT'),
      proxy: createProxy(viteEnv.get('VITE_PROXY'))
    },
    build: {
      target: 'es2015',
      brotliSize: false,
      terserOptions: {
        compress: {
          keep_infinity: true
        }
      }
    }
  }
}
