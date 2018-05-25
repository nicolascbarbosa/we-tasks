module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/media-has-caption': 0,
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
