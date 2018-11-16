var merge = require('webpack-merge')
var webpack = require('webpack')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const address = require('address');

// 获取ip
const getAddressIP = () => {
  let lanUrlForConfig = address.ip();
  if (!/^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(lanUrlForConfig)) {
    lanUrlForConfig = undefined;
  }
  return lanUrlForConfig;
}

// // add hot-reload related code to entry chunks
// var polyfill = 'eventsource-polyfill'
// var hotClient = 'webpack-hot-middleware/client?path=./__webpack_hmr&noInfo=true&reload=true'
// Object.keys(baseWebpackConfig.entry).forEach(function (name, i) {
//   var extras = i === 0 ? [polyfill, hotClient] : [hotClient]
//   extras = [hotClient]
//   baseWebpackConfig.entry[name] = extras.concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
  entry: {
    index: './src/main.js',
  },
  output: {
    filename: '[name].js',
  },
  // plugin: [
  //   // new webpack.NoEmitOnErrorsPlugin(),
  //   // new webpack.HotModuleReplacementPlugin()
  //   // new webpack.HotModuleReplacementPlugin({ multiStep: true, fullBuildTimeout: 200 })
  // ],
  // devServer: {
  // }
  module: {
    // rules: [
    //   {
    //     test: /\.less$/,
    //     use: [
    //       'style-loader',
    //       'css-loader?-autoprefixer',
    //       'less-loader',
    //     ],
    //   },
    // ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    host: getAddressIP() || '0.0.0.0',
    port: 8000,
  },
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
      chunks: ['index'],
    }),
  ],
});
