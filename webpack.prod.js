import { merge } from 'webpack-merge'
import config from './webpack.config.js'

export default merge(config, {
  mode: 'production',
  devtool: 'source-map', // without this the bundle size is massive for some reason
})