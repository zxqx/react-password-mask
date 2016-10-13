var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha'],
    files: [
      'src/*.js',
      'test/index.js'
    ],

    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap'],
      'test/index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [
          /\/sinon\.js/,
        ],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, '../node_modules')
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
        ]
      },
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon.js',
        }
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      }
    },

    webpackServer: {
      noInfo: true
    },

    babelPreprocessor: {
      options: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['babel-plugin-add-module-exports']
      }
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcovonly', subdir: 'lcov' }
      ]
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  })
};
