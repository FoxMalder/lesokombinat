module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: 'stylelint-config-recommended',
  plugins: 'stylelint-scss',
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
