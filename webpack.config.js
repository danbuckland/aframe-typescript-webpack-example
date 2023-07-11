import * as path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  devServer: {
    server: 'https',
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      scriptLoading: '', // Setting this blank allows AFrame to load correctly, default to 'defer' causes issues
      template: './src/index.html',
    }),
  ],
}
