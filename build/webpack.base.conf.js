const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'bz-app-plugins': './index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: 'style-loader!css-loader?-autoprefixer!less-loader',
          },
          postcss: [autoprefixer({
            // browsers: ['> 3%', 'last 3 versions', 'ie >= 9', 'iOS >= 7', 'Android >= 4.0'],
            browsers: ['iOS >= 8', 'Android >= 4.1'],
          })],
        },
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
      // {
      //   test: /.(css|less)$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       'css-loader?-autoprefixer',
      //       'less-loader',
      //     ],
      //   }),
      // },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader?-autoprefixer',
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      src: path.resolve(__dirname, '../src'),
      css: path.resolve(__dirname, '../css'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false, // 启动时，会导致vue-loader的deep失效
    }),
  ],
};
