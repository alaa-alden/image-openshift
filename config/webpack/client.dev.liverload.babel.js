// import webpack from 'webpack'
import defaultConfig from './client.dev.babel'
// import pkg from '../../package.json'

/* defaultConfig.module.rules[1] = {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
} */
// defaultConfig.entry.app = [
// 'react-hot-loader/patch', // needs to be first entry when entry obj is converted to an array
// 'webpack-dev-server/client?http://localhost:9000',
// './client/index.liverload.js'
// ]

// https://github.com/gaearon/react-hot-loader/tree/master/docs
// https://webpack.js.org/configuration/devtool/
// defaultConfig.devtool = 'inline-source-map'
// defaultConfig.devtool = 'cheap-module-eval-source-map'
// defaultConfig.devtool = 'eval'

defaultConfig.output.publicPath = 'http://localhost:9000/'

defaultConfig.devServer = {
  port: 9000
  // ,
  // hotOnly: true,
  //  headers: { 'Access-Control-Allow-Origin': '*' }
}


export default defaultConfig
