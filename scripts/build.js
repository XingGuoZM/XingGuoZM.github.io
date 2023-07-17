const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);
const { exec } = require('child_process');

compiler.run((err, stats) => {
  console.log('blog生成成功')
})