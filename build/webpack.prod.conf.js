
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const cssWebpackConfig = require('./webpack.css.conf');


const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'lib/loading': './src/plugins/loading',
    'lib/toast': './src/plugins/toast',
    'lib/alert': './src/plugins/alert',
    'lib/confirm': './src/plugins/confirm',
    'lib/components/toast': './src/components/toast',
    'lib/components/alert': './src/components/alert',
    'lib/components/confirm': './src/components/toast',
    'lib/components/loading': './src/components/loading',
    'lib/components/dialog': './src/components/dialog',
    'lib/components/animation/loading': './src/components/animation/loading',
  },
  output: {
    filename(file) {
      let name = file.chunk && file.chunk.name;
      if (/lib/.test(name)) name = '../[name]';
      return name === 'bz-app-plugins' ? `${name}.umd.js` : `${name}.js`;
    },
  },
  externals: ['vue'],
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ],
});

module.exports = [
  webpackConfig,
  merge(cssWebpackConfig, {
    entry: {
      'tracker.dialog': 'css/tracker.dialog.less',
      'tracker.toast': 'css/tracker.toast.less',
      'tracker.loading': 'css/tracker.loading.less',
      'crazy.dialog': 'css/crazy.dialog.less',
      'crazy.toast': 'css/crazy.toast.less',
      'crazy.loading': 'css/crazy.loading.less',
    }
  }),
];
