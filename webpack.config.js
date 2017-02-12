const path = require('path');
const webpack = require('webpack');

const libraryName = 'passwordMask';

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({ minimize: true })]
};
