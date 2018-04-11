process.env.NODE_ENV = 'production'

const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');

const webpackConfig = require('./webpack.prod.conf');

const assetsPath = path.join(__dirname, '../dist');
shell.rm('-rf', assetsPath);

const removeUseLesFile = () => {
  // 移除多余的文件（为导出css而多出来的文件）
  shell.rm('-rf', `${assetsPath}/!(bz-app-plugins|bz-app-plugins-debug).umd.js`);
  shell.rm('-rf', `${assetsPath}/bz-app-plugins.css`);
};

webpack(webpackConfig, (err, stats) => {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n\n');
  removeUseLesFile();
})
