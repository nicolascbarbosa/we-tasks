import { paths } from './utils';

export default {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    compress: true,
    port: 8001,
  },
};
