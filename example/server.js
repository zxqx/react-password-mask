const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  contentBase: './example',
  stats: {
    colors: true,
  },
  hot: true
});

server.listen(8080);
