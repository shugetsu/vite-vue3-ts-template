/**
 * @date 2021-10-11 18:46:18
 * @lastEditTime 2021-10-11 18:51:36
 * @description cz-customizable 自定义适配器配置
 * @filePath /.cz-config.js
 * @see https://github.com/leoforfree/cz-customizable
 */

module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    ['wip', '开发中'],
    ['workflow', '工作流改进'],
    ['types', '类型定义文件更改'],
    ['release', '发布版本'],
    ['merge', '分支合并 Merge branch ? of ?'],
    ['conflict', '解决合并过程中的冲突'],
    ['feat', '新增新功能'],
    ['fix', '修复问题/错误'],
    ['docs', '仅仅修改了文档/注释，比如README, CHANGELOG, CONTRIBUTE等等'],
    ['style', '不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)'],
    ['refactor', '重构代码(既没有新增功能，也没有修复 bug)'],
    ['perf', '优化/性能提升'],
    ['test', '新增测试用例或是更新现有测试'],
    ['build', '主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交'],
    ['ci', '主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交'],
    ['chore', '依赖更新/脚手架配置修改等'],
    ['revert', '回滚某个更早之前的提交']
  ].map(([value, description]) => ({
    value,
    name: `${`${value}:`.padEnd(10)}${description}`
  })),
  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['deps', '项目依赖'],
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => ({
    value,
    name: `${value.padEnd(15)}(${description})`
  })),
  // 交互提示信息
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope：',
    subject: `填写简短精炼的变更描述（不超过100字）：\n`,
    body: `填写更加详细的变更描述，使用 "|" 换行（可选）：\n`,
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED，例如: #31, #34（可选）：\n',
    confirmCommit: '确认提交？'
  },
  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],
  // 描述字符长度
  subjectLimit: 100,
  // 换行符 支持 body 和 footer
  breaklineChar: '|'
}
