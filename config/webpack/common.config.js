import { paths, alias, rules } from './utils';

export default (devMode = false) => ({
  entry: {
    bundle: `${paths.src}/index.js`,
  },
  output: {
    filename: '[name].js',
    path: paths.dist,
    publicPath: '/',
  },
  resolve: {
    alias,
  },
  devtool: devMode ? 'eval' : 'none',
  module: {
    rules: rules(devMode),
  },
});
