import webpack from 'webpack'
import path from 'path'

import { version } from '../../package.json'

const sourcePath = path.join(__dirname, '../../src')
const staticsPath = path.join(__dirname, '../../build/client')

const defaultJsRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [
      // we need to disabe modules in order to get tree shaking to work
      ['es2015', { modules: false }],
      'stage-1',
      'react'
    ]
  }
}

const defaultConfig = {
  context: sourcePath,
  entry: {
    // polyfills: './client/polyfills.js',
   app: './client/index.js'
  },
  output: {
    path: staticsPath,
    filename: `bundle.js`,
    // libraryTarget: 'umd',
    publicPath: '/client/'
  },
  module: {
    rules: [],
  }
  // },
  // resolve: {
  //   extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  //   modules: [
  //     path.resolve(__dirname, '../../node_modules'),
  //     sourcePath
  //   ]
  // },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     chunks: ['app'],
  //     minChunks(module) {
  //       return module.context
  //         && module.context.indexOf('node_modules') !== -1
  //     }
  //   })
  // ]
}

export { defaultConfig, defaultJsRule }
