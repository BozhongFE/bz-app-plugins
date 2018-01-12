// const fs = require('fs')
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.conf');

const name = process.env.npm_package_name;
const version = process.env.npm_package_version;
let modulePath = process.env.npm_config_bz_mod;

modulePath = path.join(modulePath, name);
modulePath = path.join(modulePath, version);

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'bz-app-plugins': './index.js',
  },
  output: {
    path: path.resolve(modulePath),
    // filename: `${name}-debug.js`,
    // filename: `[name]-debug.js`,
    libraryTarget: 'umd',
    // library: 'bz-app-plugins',
    libraryExport: 'default',
    // publicPath:'',
    // chunkFilename: '[name].js',
    // publicPath: '',
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        PACKAGE_NAME: '\'' + process.env.npm_package_name + '\'',
        PACKAGE_VERSION: '\'' + String(process.env.npm_package_version) + '\'',
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false, // 启动时，会导致vue-loader的deep失效
    }),
  ],
});

module.exports = webpackConfig;
