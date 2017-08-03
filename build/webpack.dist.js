'use strict'

//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('deep-assign')
const webpack = require('webpack')

const options = require('./options')
const base = require('./webpack.base.js')

const config = merge(base, {
  entry: options.paths.resolve('src/index.js'),

  output: {
    filename: options.isProduction ? 'vue-simple-spinner.min.js' : 'vue-simple-spinner.js',
    path: options.paths.output.main,
    library: 'vue-simple-spinner',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: options.banner,
      raw: true,
      entryOnly: true
    })/*,

    new ExtractTextPlugin({
      filename: options.isProduction ? 'vue-simple-spinner.min.css' : 'vue-simple-spinner.css'
    })*/
  ]
})

/*
// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
  scss: ExtractTextPlugin.extract({
    loader: 'css-loader!sass-loader',
    fallbackLoader: 'vue-style-loader'
  })
}
*/

config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
])

if (options.isProduction) {
  config.plugins = config.plugins.concat([
    // Set the production environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // Minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

module.exports = config
