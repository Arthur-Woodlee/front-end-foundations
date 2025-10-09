// stylelint.config.js
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'block-no-empty': true,
    'selector-class-pattern': [
      '^[a-z][a-z0-9\\-]+$',
      {
        message: 'Class selectors should be lowercase and kebab-case (BEM-friendly)',
      },
    ],
  },
};