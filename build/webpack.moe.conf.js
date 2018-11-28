
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.conf');
const cssWebpackConfig = require('./webpack.css.conf');

const name = process.env.npm_package_name;
const version = process.env.npm_package_version;
let modulePath = process.env.npm_config_bz_mod;

modulePath = path.join(modulePath, name);
modulePath = path.join(modulePath, version);

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(modulePath),
    filename: '[name].js',
  },
  externals: ['vue'],
});

module.exports = [
  merge(webpackConfig, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false,
        },
      }),
    ]
  }),
  // moe-debug
  merge(webpackConfig, {
    output: {
      filename: '[name]-debug.js',
    },
  }),
  // css
  merge(cssWebpackConfig, {
    output: {
      path: path.resolve(modulePath),
    },
  }),
];
