const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    __dirname + '/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'example.[hash].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html'
    }),
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, '../example'),
          path.resolve(__dirname, '../src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
