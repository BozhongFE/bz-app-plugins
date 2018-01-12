
const webpack = require('webpack');
const merge = require('webpack-merge');

const moeDebugWebpackConfig = require('./webpack.moe-debug.conf');

const name = process.env.npm_package_name;

const webpackConfig = merge(moeDebugWebpackConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ],
});
webpackConfig.output.filename = `[name].js`;


module.exports = webpackConfig;
