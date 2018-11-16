const path = require('path');
const merge = require('webpack-merge');

const moeDebugWebpackConfig = require('./webpack.moe-debug.conf');

const webpackConfig = merge(moeDebugWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].umd.js',
    chunkFilename: './[name].js',
  },
});

module.exports = webpackConfig;
