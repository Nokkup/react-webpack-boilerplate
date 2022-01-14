const {merge} = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
};
const env = envs[process.env.NODE_ENV || 'development'];

const config = require(`./webpack/webpack.${env}.js`);

module.exports = merge(common, config);
