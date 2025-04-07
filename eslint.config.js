// eslint.config.js
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import eslintPluginPrettierConfig from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      vue,
      prettier,
    },
    rules: {
      ...vue.configs.recommended.rules,
      ...eslintPluginPrettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
]
