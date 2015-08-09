'use strict'

var _ = require('lodash')
var utils = require('loader-utils')

module.exports = function (content) {
  if (this.cacheable != null) {
    this.cacheable()
  }

  var query = utils.parseQuery(this.query)
  var opts = this.options

  return _.template(content)(_.extend(query, opts))
}
