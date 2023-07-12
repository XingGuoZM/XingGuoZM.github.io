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

  await server.start();


};
exec('node markdown2html.js', () => {
  console.log('生成成功')
  runServer();
});
