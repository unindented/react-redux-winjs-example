'use strict'

module.exports = {
  test: ['karma:test'],
  watch: ['karma:watch'],
  serve: ['concurrent:servers'],

  'release': ['release-web', 'release-electron'],
  'release-web': ['webpack:release-web', 'legal-eagle:web'],
  'release-electron': ['webpack:release-electron', 'legal-eagle:electron'],

  default: ['test']
}
