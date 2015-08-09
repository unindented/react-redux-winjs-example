'use strict'

var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var pkg = require('../package.json')

module.exports = function (options) {
  return {
    output: {
      path: './dist/tmp/',
      filename: 'index.js'
    },

    debug: (options.serve || options.test),
    devtool: (options.serve || options.test ? 'eval' : null),

    resolve: {
      extensions: ['', '.js', '.jsx', '.json'],

      modulesDirectories: [
        'apps',
        'containers',
        'components',
        'actions',
        'reducers',
        'selectors',
        'decorators',
        'constants',
        'styles',
        'utils',
        'web_modules',
        'node_modules'
      ],

      alias: {
        'package$': path.resolve(__dirname, '../package.json')
      }
    },

    resolveLoader: {
      extensions: ['', '.js'],

      modulesDirectories: [
        'loaders',
        'web_modules',
        'node_modules'
      ]
    },

    plugins: [
      new ExtractTextPlugin('index.css', {disable: options.serve})
    ],

    module: {
      loaders: [
        {
          test: /\.ttf$/,
          loader: 'file'
        },
        {
          test: /\.html$/,
          exclude: /node_modules[\\\/]/,
          loader: [
            'file?name=[name].[ext]',
            'template'
          ].join('!')
        },
        {
          test: /\.css$/,
          exclude: /node_modules[\\\/]/,
          loader: ExtractTextPlugin.extract('style', [
            'css?sourceMap'
          ].join('!'))
        },
        {
          test: /\.less$/,
          exclude: /node_modules[\\\/]/,
          loader: ExtractTextPlugin.extract('style', [
            'css?sourceMap',
            'postcss?sourceMap',
            'less?sourceMap',
            'wrap?less'
          ].join('!'))
        },
        {
          test: /\.(res)?json$/,
          loader: [
            'json',
            'template'
          ].join('!')
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules[\\\/]/,
          loader: (options.serve ? [
            'react-hot'
          ] : []).concat([
            'babel'
          ]).join('!')
        },
        {
          test: require.resolve('react/addons'),
          loader: 'expose?React'
        },
        {
          test: require.resolve('react-winjs'),
          loader: 'imports?WinJS=winjs'
        }
      ],

      postLoaders: (options.coverage ? [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|test)[\\\/]/,
          loader: 'istanbul-instrumenter'
        }
      ] : [])
    },

    package: options.package || pkg,

    postcss: [
      autoprefixer
    ],

    wrap: {
      less: {
        before: '@import "~config.less";'
      }
    },

    progress: true,

    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  }
}
