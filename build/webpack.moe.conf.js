

const merge = require('webpack-merge');

const moeDebugWebpackConfig = require('./webpack.moe-debug.conf');

// const name = process.env.npm_package_name;

const webpackConfig = merge(moeDebugWebpackConfig, {
});
webpackConfig.output.filename = `[name].js`;

module.exports = webpackConfig;
