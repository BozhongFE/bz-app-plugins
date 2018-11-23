
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const getFiles = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) throw reject(err);
      const fileArr = [];
      files.forEach((filename) => {
        fileArr.push(path.resolve(filePath, filename));
      });
      resolve(fileArr);
    });
  });
}

const webpackConfig = async () => {
  return {
    entry: {
      css: await getFiles(path.resolve(__dirname, '../css')),
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].dll.js',
      library: '[name]_dll',
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        src: path.resolve(__dirname, '../src'),
      },
      extensions: ['*', '.js', '.vue', '.json'],
    },
    module: {
      rules: [
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
    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(__dirname, '../dist/[name]-manifest.json'),
        name: '[name]_dll',
        context: __dirname,
      }),
    ],
  };
};

module.exports = webpackConfig();
