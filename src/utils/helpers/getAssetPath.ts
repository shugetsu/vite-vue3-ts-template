import { createLogger } from '../logger'

const assets = import.meta.globEager(`/src/assets/**`)
const logger = createLogger('getAssetPath')

/**
 * @description 获取资源路径
 * @param {string} path
 * @return {string}
 */
export function getAssetPath(path: string): string {
  const pathKey = `/src/assets/${path}`.replaceAll('//', '/')
  const assetPath = assets[pathKey]?.default

  if (!assetPath) {
    logger.error(`未找到 '${path}' 资源`)
  }

  return assetPath ?? ''
}
