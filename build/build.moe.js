process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');
const moewebpackConfig = require('./webpack.moe.conf');
const moeDebugwebpackConfigDebug = require('./webpack.moe-debug.conf');

// 判断目标目录路径等
const exists = fs.existsSync;
const name = process.env.npm_package_name;
const version = process.env.npm_package_version;
let modulePath = process.env.npm_config_bz_mod;

if (typeof modulePath === 'undefined') {
  console.log('请先配置模块所在目录');
  console.log('Example: npm config set bz-mod "D:\\source"');
  throw new Error('没有配置模块路径');
} else if (!exists(modulePath)) {
  throw new Error('模块目录不存在，请检查配置的模块目录是否正确');
} else {
  modulePath = path.join(modulePath, name);
  if (!exists(modulePath)) {
    fs.mkdirSync(modulePath);
  }
  modulePath = path.join(modulePath, version);
  if (!exists(modulePath)) {
    fs.mkdirSync(modulePath);
  }
}

const assetsPath = path.resolve(modulePath);

// 移除子文件夹外的文件
shell.rm('-rf', `${assetsPath}/*.*`);

const removeUseLesFile = () => {
  // 移除多余的文件（为导出css而多出来的文件）
  shell.rm('-rf', `${assetsPath}/!(bz-app-plugins|bz-app-plugins-debug).js`);
  shell.rm('-rf', `${assetsPath}/bz-app-plugins.css`);
};

webpack(moewebpackConfig, (err, stats) => {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n\n');
  removeUseLesFile();
});

webpack(moeDebugwebpackConfigDebug, (err, stats) => {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n\n');
  removeUseLesFile();
});

require('./build.js');