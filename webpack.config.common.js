const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  node: {
    fs: 'empty',
  },
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: './js/bundle.[hash:8].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/public/index.html',
      favicon: 'src/public/favicon.png',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash:8].css',
      chunkFilename: '[id].css',
    }),
  ],
};
