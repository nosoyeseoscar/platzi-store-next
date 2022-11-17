module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next/core-web-vitals'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 0,
    /* 'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ], */
  },
};
