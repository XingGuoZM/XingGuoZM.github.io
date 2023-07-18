
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const compiler = Webpack(webpackConfig);
const devServerOptions = webpackConfig.devServer
const server = new WebpackDevServer(devServerOptions, compiler);
const runServer = async () => {
  //
  await server.start();
  console.log('Starting server...');
};
runServer();
