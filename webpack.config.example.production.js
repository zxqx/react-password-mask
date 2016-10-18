const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/example/main.js',
  output: {
    path: __dirname + '/example/dist',
    filename: 'example.[hash].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([{
      from: './example/style.css'
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
          path.resolve(__dirname, './example/main.js'),
          path.resolve(__dirname, './src')
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
