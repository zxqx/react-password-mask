module.exports = {
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
