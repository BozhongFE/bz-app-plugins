var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    'bz-app-plugins': './src/main.js',
    tracker: './src/assets/css/tracker-px.less',
    // trackerrem: './src/assets/css/tracker-rem.less',
    // crazy: './src/assets/css/crazy-px.less',
  },
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   filename: process.env.NODE_ENV === 'production' ? '[name].js?[chunkhash]' : '[name].js',
  //   chunkFilename: '[id].js?[chunkhash]',
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: 'style-loader!css-loader?-autoprefixer!less-loader',
          },
        },
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     'style-loader',
      //     'css-loader?-autoprefixer',
      //     'less-loader',
      //   ],
      // },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[
            'css-loader?-autoprefixer',
            'less-loader',
          ]
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
            plugins: ['syntax-dynamic-import'],
          },
        }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.resolve(__dirname, '../src'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({name: 'tracker', minChunks: Infinity}),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: false,
    }),
  ],
};
