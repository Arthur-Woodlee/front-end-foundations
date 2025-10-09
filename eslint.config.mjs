// eslint.config.mjs
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      env: {
        browser: true,
        es2021: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
];