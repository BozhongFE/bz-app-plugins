var merge = require('webpack-merge')
var webpack = require('webpack')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

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
  // plugin: [
  //   // new webpack.NoEmitOnErrorsPlugin(),
  //   // new webpack.HotModuleReplacementPlugin()
  //   // new webpack.HotModuleReplacementPlugin({ multiStep: true, fullBuildTimeout: 200 })
  // ],
  // devServer: {
  // }
  module: {
    rules: [
       {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?-autoprefixer',
          'less-loader',
        ],
      },
    ],
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
