import { paths } from './utils';

/* eslint-disable import/no-extraneous-dependencies */
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default envFile => ({
  plugins: [
    new Dotenv({
      path: envFile,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: `${paths.src}/index.html`,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
      },
      chunks: ['bundle'],
    }),
  ],
});
