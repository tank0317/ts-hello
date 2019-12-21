const path = require('path')
const webpack = require('webpack')
const argv = require('yargs').argv

let loader = 'babel-loader'

if (argv.loader) {
  loader = argv.loader
}

webpack({
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'demo',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: loader
        }
      }
    ]
  },
  optimization: {
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    usedExports: true
  },
  devtool: 'source-map',
  mode: 'development'
}).run((err) => {
  if (err) {
    throw err
  }
})