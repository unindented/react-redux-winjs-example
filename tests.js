'use strict'

require('babel-core/polyfill')

var jqueryMatchers = require('jasmine-jquery-matchers')
var immutableMatchers = require('jasmine-immutable-matchers')

beforeEach(function () {
  jasmine.addMatchers(jqueryMatchers)
  jasmine.addMatchers(immutableMatchers)
})

var appsContext = require.context('./apps', true, /\/test\/.*\.jsx?$/)
appsContext.keys().forEach(appsContext)

var containersContext = require.context('./containers', true, /\/test\/.*\.jsx?$/)
containersContext.keys().forEach(containersContext)

var componentsContext = require.context('./components', true, /\/test\/.*\.jsx?$/)
componentsContext.keys().forEach(componentsContext)

var actionsContext = require.context('./actions', true, /\/test\/.*\.jsx?$/)
actionsContext.keys().forEach(actionsContext)

var reducersContext = require.context('./reducers', true, /\/test\/.*\.jsx?$/)
reducersContext.keys().forEach(reducersContext)

var selectorsContext = require.context('./selectors', true, /\/test\/.*\.jsx?$/)
selectorsContext.keys().forEach(selectorsContext)

var decoratorsContext = require.context('./decorators', true, /\/test\/.*\.jsx?$/)
decoratorsContext.keys().forEach(decoratorsContext)

var utilsContext = require.context('./utils', true, /\/test\/.*\.jsx?$/)
utilsContext.keys().forEach(utilsContext)
