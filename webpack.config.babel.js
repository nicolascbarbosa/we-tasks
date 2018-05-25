import { commonConfig, developmentConfig, productionConfig, plugins } from './config/webpack';

export default (env) => {
  const devMode = env === 'development';
  switch (env) {
    case 'production':
      return Object.assign(commonConfig(), productionConfig, plugins('./.env.production'));
    default:
      return Object.assign(commonConfig(devMode), developmentConfig, plugins('./.env'));
  }
};
