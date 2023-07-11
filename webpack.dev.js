import { merge } from 'webpack-merge'
import config from './webpack.config.js'

export default merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: 'src/**/*',
    server: 'https',
    static: './dist',
    host: '0.0.0.0',
    port: 5555,
  },
})