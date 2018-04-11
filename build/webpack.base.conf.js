const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  // entry: {
  //   // 'bz-app-plugins': './src/main.js',
  // },
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
  plugins: [],
};
