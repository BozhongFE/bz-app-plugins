const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    crazy: 'src/assets/css/crazy.less',
    tracker: 'src/assets/css/tracker.less',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
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
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ]
};
