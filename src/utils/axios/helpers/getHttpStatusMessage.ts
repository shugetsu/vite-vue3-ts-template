import { useI18n } from '/@/hooks/web/useI18n'

/**
 * @description 获取 http 状态消息
 * @param {number} status
 */
export function getHttpStatusMessage(status: number) {
  const { t } = useI18n()

  switch (status) {
    case 401:
      return t('api.status.401')
    case 403:
      return t('api.status.403')
    case 404:
      return t('api.status.404')
    case 405:
      return t('api.status.405')
    case 408:
      return t('api.status.408')
    case 500:
      return t('api.status.500')
    case 501:
      return t('api.status.501')
    case 502:
      return t('api.status.502')
    case 503:
      return t('api.status.503')
    case 504:
      return t('api.status.504')
    case 505:
      return t('api.status.505')
    default:
      return t('api.status.999')
  }
}
