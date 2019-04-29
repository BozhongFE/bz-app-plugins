const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    tracker: 'css/tracker.less',
    crazy: 'css/crazy.less',
    ivf: 'css/ivf.less',
  },
  output: {
    path: path.resolve(__dirname, '../css'),
    filename: '[name].css',
    chunkFilename: '[name].css',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?-autoprefixer',
            'less-loader',
          ],
        }),
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      src: path.resolve(__dirname, '../src'),
      css: path.resolve(__dirname, '../src/assets/css'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
};
