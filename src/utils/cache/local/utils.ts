/**
 * @description 获取 命名空间_
 * @param {string} namespace
 * @return {string}
 */
export function getN(namespace: string): string {
  return `${namespace}_`.toUpperCase()
}

/**
 * @description 获取 命名空间_版本号_
 * @param {string} namespace
 * @param {string} version
 * @return {string}
 */
export function getNV(namespace: string, version: string): string {
  return `${namespace}_${version}_`.toUpperCase()
}

/**
 * @description 获取 命名空间_版本号_{key}
 * @param {string} namespace
 * @param {string} version
 * @param {string} key
 * @return {string}
 */
export function getNVK(namespace: string, version: string, key: string): string {
  const nv = getNV(namespace, version)
  const nvReg = new RegExp(`${nv}`, 'i')
  const k = key.replace(nvReg, '').toUpperCase()
  const nvk = `${nv}${k}`
  return nvk
}

/**
 * @description 是否已过期
 * @param {number} t
 * @param {number} ttl
 * @return {boolean}
 */
export function isExpire(t: number, ttl: number): boolean {
  return ttl !== 0 && t + ttl < Date.now()
}
