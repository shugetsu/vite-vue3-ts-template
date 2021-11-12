/**
 * @date 2021-10-11 19:05:27
 * @lastEditTime 2021-11-12 14:48:58
 * @description prettier 配置
 * @filePath /.prettierrc.js
 * @see https://prettier.io/docs/en/options.html
 */

module.exports = {
  printWidth: 120, // 单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  semi: false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  trailingComma: 'none', // 去除对象最末尾元素跟随的逗号
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  vueIndentScriptAndStyle: true, // 是否缩进Vue 文件中的代码<script>和<style>标签。有些人（如Vue 的创建者）不缩进以保存缩进级别，但这可能会破坏编辑器中的代码折叠。
  htmlWhitespaceSensitivity: 'ignore', // 全局空白敏感度
  proseWrap: 'always' // 当超出print width（上面有这个参数）时就折行
}
