const webpack = require('webpack');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const Dotenv = require('dotenv-webpack');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',

    hot: true,
  },
  plugins: [
    new DashboardPlugin(),
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
