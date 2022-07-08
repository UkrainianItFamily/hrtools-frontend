module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
    worker: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
};
