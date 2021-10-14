import { Logger } from './Logger'
import { createAppEnvConfigService } from '/%/utils'

const appEnv = createAppEnvConfigService()

/**
 * @description 创建日志
 * @param {string[]} modules
 * @return {Logger}
 */
export function createLogger(...modules: string[]): Logger {
  const namespace = modules.reduce((namespace, module) => `${namespace}/${module}`, appEnv.VITE_APP_NAMESPACE)
  const logger = new Logger(`[${namespace}]:`).setLevel(appEnv.VITE_LOGGER_LEVEL)
  return logger
}
