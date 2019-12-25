const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const argv = require('yargs').argv

let loader = 'babel-loader'
let plugins = []
if (argv.loader) {
  loader = argv.loader
}

if (loader === 'babel-loader') {
  plugins.push(
    new ForkTsCheckerWebpackPlugin({
      formatter: 'codeframe'
    })
  )
}

process.exitCode = 0;

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
  plugins: [].concat(plugins),
  optimization: {
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    usedExports: true
  },
  devtool: 'source-map',
  mode: 'development'
}, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) console.error(err.details);
    process.exitCode = 1;
    return;
  }
  const statsString = stats.toString({
    colors: true
  });
  if (statsString) process.stdout.write(`${statsString}\n`);
})