// https://stylelint.io/user-guide/configuration
// https://jsrepos.com/lib/ota-meshi-stylelint-config-standard-vue

module.exports = {
  extends: [
    'stylelint-config-standard-scss', // configure for SCSS
    'stylelint-config-standard-vue/scss', // configure for SCSS in Vue
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.scss', '**/*.scss'],
      rules: {
        'unit-allowed-list': ['px', 's', '%', 'vh', 'vw', 'deg', 'fr', 'ms'],
        'value-no-vendor-prefix': [true, { ignoreValues: ["box"] }],
      },
    },
    {
      files: ['*.scss', '**/*.scss'],
      rules: {
        'selector-class-pattern': ['[\_\-a-zA-Z0-9]+', { resolveNestedSelectors: true }],
      }
    },
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-class-pattern': ['(pux-[A-Z][a-zA-Z]+)|v-[\-a-z]', { resolveNestedSelectors: false }],
      },
    }
  ],
  rules: {
    indentation: [4, { baseIndentLevel: 0 }],
  },
};

// module.exports = {
//   extends: 'stylelint-config-standard',
//   rules: {
//     indentation: 4,
//     'selector-pseudo-element-no-unknown': [
//       true,
//       {
//         ignorePseudoElements: ['v-deep'],
//       },
//     ],
//     'number-leading-zero': 'never',
//     'no-descending-specificity': null,
//     'font-family-no-missing-generic-family-keyword': null,
//     'selector-type-no-unknown': null,
//     'at-rule-no-unknown': null,
//     'no-duplicate-selectors': null,
//     'no-empty-source': null,
//     'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
//   },
// };
