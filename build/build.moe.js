process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');
const moewebpackConfig = require('./webpack.moe.conf');
const moeDebugwebpackConfigDebug = require('./webpack.moe-debug.conf');

// 判断目标目录路径等
const exists = fs.existsSync;
const modulePath = process.env.npm_config_bz_mod;

if (typeof modulePath === 'undefined') {
  console.log('请先配置模块所在目录');
  console.log('Example: npm config set bz-mod "D:\\source"');
  throw new Error('没有配置模块路径');
} else if (!exists(modulePath)) {
  throw new Error('模块目录不存在，请检查配置的模块目录是否正确');
}

const assetsPath = path.join(__dirname, '../dist');
shell.rm('-rf', assetsPath);

webpack(moewebpackConfig, function (err, stats) {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n\n');
});

webpack(moeDebugwebpackConfigDebug, function (err, stats) {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n\n');
});