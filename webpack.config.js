const merge = require('webpack-merge');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
