'use strict'

var once = require('lodash/function/once')

var initStore = once(function () {
  return require('fortune-example')({
    users: {min: 30, max: 50},
    groups: {min: 10, max: 30},
    threads: {min: 1, max: 10},
    messages: {min: 1, max: 10}
  })
})

var extractChanges = function (methods, evt) {
  return ['create', 'update', 'delete'].reduce(function (memo, method) {
    var value = evt[methods[method]]
    if (value) {
      memo[method] = value
    }
    return memo
  }, {})
}

var enableCORS = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next()
}

module.exports = function () {
  return {
    back: {
      options: {
        port: 8001,

        middleware: function (connect, options, middlewares) {
          var store = initStore()
          var httpOptions = {json: {spaces: 2}}
          var http = store.http(httpOptions)

          middlewares.unshift(['/api', http])
          middlewares.unshift(enableCORS)

          return middlewares
        },

        onCreateServer: function (server) {
          var store = initStore()
          var wsOptions = {server: server, path: '/realtime'}
          var change = function (ws, evt) {
            ws.send(JSON.stringify(extractChanges(store.methods, evt)))
          }
          var wss = store.ws(wsOptions, change)

          wss.on('connection', function (ws) {
            ws.on('message', function (msg) {
              ws.send(msg)
            })
          })
        }
      }
    }
  }
}
