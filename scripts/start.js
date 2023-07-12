// webpack serve
const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const { exec } = require('child_process');
const compiler = Webpack(webpackConfig);
const devServerOptions = webpackConfig.devServer
const server = new WebpackDevServer(devServerOptions, compiler);
const runServer = async () => {
  console.log('Starting server...');
  exec('node markdown2html.js');
  await server.start();

};

runServer();