import { concat } from 'lodash';
import styles from '../../../src/assets/scss';

console.log(styles)

/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const styleLoader = (devMode) => {
  if (devMode) {
    return {
      loader: 'style-loader',
      options: { singleton: true },
    };
  }

  return {
    loader: MiniCssExtractPlugin.loader,
  };
};

const cssLoader = {
  loader: 'css-loader',
  options: { modules: true, localIdentName: '[name]__[local]--[hash:base64:5]' },
};

const postCssLoader = {
  loader: 'postcss-loader',
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: styles,
  },
};

export default devMode => [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(jpg|png|gif|svg|ico)$/,
    exclude: /node_modules/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'img/',
    },
  },
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/',
    },
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: concat(styleLoader(devMode), cssLoader, postCssLoader, sassLoader),
  },
];
