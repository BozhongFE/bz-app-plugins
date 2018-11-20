const merge = require('webpack-merge')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')

// 获取ip
const address = require('address');
const getAddressIP = () => {
  let lanUrlForConfig = address.ip();
  if (!/^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(lanUrlForConfig)) {
    lanUrlForConfig = undefined;
  }
  return lanUrlForConfig;
}

module.exports = merge(baseWebpackConfig, {
  entry: {
    main: './src/main.js',
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    host: getAddressIP() || '0.0.0.0',
    port: 8000,
  },
  devtool: '#eval-source-map',
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
    }),
  ],
});
