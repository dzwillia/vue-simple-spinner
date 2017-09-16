'use strict'

const path = require('path')
const version = require('../package.json').version

const banner =
  '/*!\n' +
  ' * vue-simple-spinner v' + version + ' (https://github.com/dzwillia/vue-simple-spinner)\n' +
  ' * (c) ' + new Date().getFullYear() + ' David Z. Williams\n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
  banner,
  version,
  isProduction: process.env.NODE_ENV === 'production',

  paths: {
    root: path.join(__dirname, '..'),

    src: {
      main: path.join(__dirname, '..', 'src'),
      examples: path.join(__dirname, '..', 'examples-src')
    },

    output: {
      main: path.join(__dirname, '..', 'dist'),
      examples: path.join(__dirname, '..', 'examples')
    },

    resolve(location) {
      return path.join(__dirname, '..', location)
    }
  }
}
