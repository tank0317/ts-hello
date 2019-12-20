let rollup = require('rollup')
let babel = require('rollup-plugin-babel')
let resolve = require('@rollup/plugin-node-resolve')

rollup.rollup({
  input: 'src/index.ts',
  plugins: [
    resolve({
      extensions: ['.ts']
    }),
    babel({
      extensions: ['.ts']
    })
  ]
}).then(function (bundle) {
  bundle.write({
    dir: "dist",
    format: "esm"
  })
})


