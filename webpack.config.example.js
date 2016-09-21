var webpack = require('webpack');
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'example';

var plugins = [], outputFile;

outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/example/main.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/example/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
