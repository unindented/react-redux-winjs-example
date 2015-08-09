'use strict'

var assign = require('lodash/object/assign')
var webpack = require('webpack')

var config = require('./webpack-config')

var assignPlugins = function (options) {
  return assign(options, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"test"'
      })
    ].concat(options.plugins)
  })
}

module.exports = {
  options: {
    basePath: '',

    files: ['tests.js'],

    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    preprocessors: {
      'tests.js': ['webpack', 'sourcemap']
    },

    webpackMiddleware: {
      noInfo: true
    },

    webpackPort: 9874,
    runnerPort: 9875,
    port: 9876
  },

  // Watch for changes and run all tests.
  watch: {
    webpack: assignPlugins(config({test: true})),

    reporters: ['dots']
  },

  // Run tests with coverage.
  test: {
    singleRun: true,

    webpack: assignPlugins(config({test: true, coverage: true})),

    reporters: ['dots', 'coverage'],

    coverageReporter: {
      dir: 'coverage',

      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'text'}
      ]
    }
  }
}
