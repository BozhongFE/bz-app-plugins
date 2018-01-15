const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const moeDebugWebpackConfig = require('./webpack.moe-debug.conf');

const webpackConfig = merge(moeDebugWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].umd.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ],
});


module.exports = webpackConfig;