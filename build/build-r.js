let rollup = require('rollup')
let typescript = require('rollup-plugin-typescript2')
let resolve = require('@rollup/plugin-node-resolve')

const argv = require('yargs').argv

let loader = require('rollup-plugin-babel')

if (argv.ts) {
  loader = typescript
}

rollup.rollup({
  input: 'src/index.ts',
  plugins: [
    resolve({
      extensions: ['.ts']
    }),
    loader({
      extensions: ['.ts']
    })
  ]
}).then(function (bundle) {
  bundle.write({
    file: "dist/bundle-t.js",
    format: "esm"
  })
})


