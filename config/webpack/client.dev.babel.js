import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import CopyWebpackPlugin from 'copy-webpack-plugin'
import { defaultConfig, defaultJsRule } from './client.babel'
import pkg, { version } from '../../package.json'

// defaultJsRule.query.plugins = ['react-hot-loader/babel']
defaultConfig.module.rules.push(defaultJsRule)

defaultConfig.module.rules.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader'
})

defaultConfig.module.rules.push({
  test: /\.(jpg|png|svg)$/,
  use: [
    'file-loader'
  ]
})
defaultConfig.module.rules.push({
  test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
  loader: 'file-loader'
})
// defaultConfig.plugins.push(
//   new webpack.NoEmitOnErrorsPlugin() // do not emit compiled assets that include errors
// )

// There's a bug with style-loader that seems to conflict with NamedModulesPlugin
// At the time of writing there's no known fix other than to disable NamedModulesPlugin
// see https://github.com/webpack-contrib/style-loader/issues/179
// and https://github.com/webpack-contrib/style-loader/issues/182
//
// prints more readable module names in the browser console on HMR updates
// defaultConfig.plugins.push(
//   new webpack.NamedModulesPlugin()
// )

// https://github.com/gaearon/react-hot-loader/tree/master/docs
// https://webpack.js.org/configuration/devtool/
// defaultConfig.devtool = 'inline-source-map'
// defaultConfig.devtool = 'cheap-module-eval-source-map'
// defaultConfig.devtool = 'eval'


// defaultConfig.target = 'web'

// defaultConfig.plugins.push(
//   new ExtractTextPlugin({ filename: `[name].${version}.bundle.css`, allChunks: true, ignoreOrder: true }),
//   new CopyWebpackPlugin([{ from: '../src/assets/favicons/', to: '../../build/client/favicons' }])
// )

export default defaultConfig
