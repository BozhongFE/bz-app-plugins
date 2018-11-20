process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');
const moewebpackConfig = require('./webpack.moe.conf');

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

webpack(moewebpackConfig, (err, stats) => {
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

require('./build.js');