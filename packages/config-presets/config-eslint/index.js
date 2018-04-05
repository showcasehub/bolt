module.exports = {
  extends: './ideal.js',
  // Disabling all rules with errors from `ideal.js` (which represents the ideal state)
  // Process:
  // 1. Delete a line from `rules`
  // 2. Lint
  // 3. Fix (first run auto-fix with `npm run lint:js:fix`, then manually fix rest)
  // 4. PR
  // When `rules` is empty, we rename `ideal.js` to `index.js` and delete this file.
  rules: {
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'space-before-blocks': 'off',
    'max-len': 'off',
    'global-require': 'off',
    'object-curly-spacing': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'quotes': 'off',
    'no-mixed-operators': 'off',
    'comma-dangle': 'off',
    'object-shorthand': 'off',
    'no-useless-escape': 'off',
    'block-spacing': 'off',
    'indent': 'off',
    'no-unneeded-ternary': 'off',
    'lines-around-directive': 'off',
    'strict': 'off',
    'no-var': 'off',
    'prefer-template': 'off',
    'no-multi-spaces': 'off',
    'padded-blocks': 'off',
    'no-lonely-if': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'prefer-const': 'off',
    'no-else-return': 'off',
    'no-return-await': 'off',
    'arrow-parens': 'off',
    'default-case': 'off',
    'prefer-arrow-callback': 'off',
    'radix': 'off',
    'space-before-function-paren': 'off',
    'vars-on-top': 'off',
    'prefer-spread': 'off',
    'no-plusplus': 'off',
    'keyword-spacing': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'no-case-declarations': 'off',
    'no-unreachable': 'off',
    'quote-props': 'off',
    'eol-last': 'off',
    'no-multiple-empty-lines': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'semi-spacing': 'off',
    'no-extra-semi': 'off',
    'brace-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/first': 'off',
    'no-dupe-keys': 'off',
    'template-curly-spacing': 'off',
    'no-nested-ternary': 'off',
    'no-trailing-spaces': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'no-prototype-builtins': 'off',
    'spaced-comment': 'off',
    'wrap-iife': 'off',
    'no-floating-decimal': 'off',
    'no-script-url': 'off',
    'curly': 'off',
    'import/extensions': 'off',
    'dot-notation': 'off',
    'key-spacing': 'off',
    'no-cond-assign': 'off',
    'guard-for-in': 'off',
    'block-scoped-var': 'off',
    'no-redeclare': 'off',
    'prefer-rest-params': 'off',
    'array-callback-return': 'off',
    'no-empty': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'new-parens': 'off',
  },
};
