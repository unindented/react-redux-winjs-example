'use strict'

module.exports = {
  servers: {
    tasks: ['webpack-dev-server:front', 'connect:back:keepalive'],
    options: {
      logConcurrentOutput: true
    }
  }
}
