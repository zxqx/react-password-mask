const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'example.[hash].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/style.css'
    }]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, './main.js'),
          path.resolve(__dirname, '../src')
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
