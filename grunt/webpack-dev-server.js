'use strict'

var assign = require('lodash/object/assign')
var webpack = require('webpack')

var config = require('./webpack-config')

module.exports = function (grunt, options) {
  var app = grunt.option('app') || 'Desktop'
  var commonOptions = config(assign({serve: true}, options))
  assign(commonOptions, {
    entry: './index.js?' + app,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ].concat(commonOptions.plugins)
  })

  var https = false
  var host = '0.0.0.0'
  var port = 8000

  return {
    options: {
      webpack: commonOptions
    },

    front: {
      https: https,
      host: host,
      port: port,

      hot: true,
      inline: true,
      keepalive: true,

      webpack: {
        failOnError: false
      }
    }
  }
}
