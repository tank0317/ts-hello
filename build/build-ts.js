let rollup = require('rollup')
let typescript = require('rollup-plugin-typescript2')
let resolve = require('@rollup/plugin-node-resolve')

rollup.rollup({
  input: 'src/index.ts',
  plugins: [
    resolve({
      extensions: ['.ts']
    }),
    typescript()
  ]
}).then(function (bundle) {
  bundle.write({
    file: "dist/bundle-t.js",
    format: "esm"
  })
})


