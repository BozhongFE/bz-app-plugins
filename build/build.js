process.env.NODE_ENV = 'production'

const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');

const webpackConfig = require('./webpack.prod.conf');

const assetsPath = path.join(__dirname, '../dist');
const cssPath = path.join(__dirname, '../css');
const libPath = path.join(__dirname, '../lib');

shell.rm('-rf', `${assetsPath}/.*!(\.dll\.|-manifest).*`);
shell.rm('-rf', cssPath);
shell.rm('-rf', libPath);


webpack(webpackConfig, (err, stats) => {
  if (err) throw err;

  const statsArr = stats.stats || [stats];
  const length = statsArr.length;

  for (let i = 0; i < length; i += 1) {
    console.log(`path: ${assetsPath}`);
    process.stdout.write(statsArr[i].toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n');
  }
});
