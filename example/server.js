const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js');

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  contentBase: './example',
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  hot: true
});

server.listen(8080);
