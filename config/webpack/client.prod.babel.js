
import { defaultConfig, defaultJsRule } from './client.babel'

defaultConfig.module.rules.push(defaultJsRule)

defaultConfig.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader'
})

defaultConfig.target = 'web'
defaultConfig.devtool = 'source-map'

export default defaultConfig
