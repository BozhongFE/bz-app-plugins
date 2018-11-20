
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    filename: '[name].umd.js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = webpackConfig;
