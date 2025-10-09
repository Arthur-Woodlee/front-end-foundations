// stylelint.config.js
import stylelintConfigStandard from 'stylelint-config-standard';

export default {
  extends: [stylelintConfigStandard],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'block-no-empty': true,
  },
};