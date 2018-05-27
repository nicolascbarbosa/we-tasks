module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'class-methods-use-this': 0,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      configurable: {
        Store: './src/store',
        Containers: './src/containers',
        Images: './src/assets/img',
      },
    },
  },
};
