var webpack = require('webpack');
var path = require('path');
var env = require('yargs').argv.mode;

var config = {
  entry: __dirname + '/example/main.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/example/dist',
    filename: 'example.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};

module.exports = config;
