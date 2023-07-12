const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);
const { exec } = require('child_process');

compiler.run((err, stats) => {
  exec('node markdown2html.js');
  // console.log()
})