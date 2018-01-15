const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'bz-app-plugins': './index.js',
    tracker: './src/assets/css/tracker-px.less',
    trackerrem: './src/assets/css/tracker-rem.less',
    crazy: './src/assets/css/crazy-px.less',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: `${name}-debug.js`,
    filename: `[name].umd.js`,
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
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
});

module.exports = webpackConfig;