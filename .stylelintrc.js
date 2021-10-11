/**
 * @date 2021-10-11 19:05:27
 * @lastEditTime 2021-10-11 19:18:34
 * @description stylelint 配置
 * @filePath /.stylelintrc.js
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  rules: {
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['/^v-/'] }],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
