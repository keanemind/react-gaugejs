module.exports = {
  'plugins': [
    'react-hooks',
  ],
  'extends': [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  'parserOptions': {
    'sourceType': 'module',
  },
};
