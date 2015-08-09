'use strict'

var assign = require('lodash/object/assign')
var webpack = require('webpack')
var StatsPlugin = require('stats-webpack-plugin')

var config = require('./webpack-config')

module.exports = function (grunt, options) {
  var app = grunt.option('app') || 'Desktop'
  var commonOptions = config(options)
  assign(commonOptions, {entry: './index.js?' + app})

  var watchOptions = {
    failOnError: false,

    watch: true,
    keepalive: true,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ].concat(commonOptions.plugins)
  }

  var buildOptions = {
    failOnError: true,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),

      new StatsPlugin('stats.json', {
        chunkModules: true
      })
    ].concat(commonOptions.plugins)
  }

  var releaseOptions = {
    failOnError: true,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),

      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),

      new StatsPlugin('stats.json', {
        chunkModules: true
      })
    ].concat(commonOptions.plugins)
  }

  return {
    options: commonOptions,

    // Unoptimized build.
    build: buildOptions,

    // Watch for changes and do an unoptimized build.
    watch: watchOptions,

    // Optimized build for web.
    'release-web': assign({
      target: 'web',

      output: {
        path: './dist/web/',
        filename: 'index.js'
      }
    }, releaseOptions),

    // Optimized build for electron.
    'release-electron': assign({
      target: 'electron',

      output: {
        path: './dist/electron/',
        filename: 'index.js'
      }
    }, releaseOptions)
  }
}
