/**
 * @date 2022-01-09 14:58:11
 * @lastEditTime 2022-01-09 15:08:50
 * @description HTTP content-type
 * @filePath /src/datas/enums/ContentTypeEnum.ts
 */

export const enum ContentTypeEnum {
  /**
   * @description JSON 数据格式
   */
  JSON = 'application/json;charset=UTF-8',
  /**
   * @description 表单默认的提交数据的格式
   */
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  /**
   * @description 需要在表单中进行文件上传时，就需要使用该格式
   */
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
