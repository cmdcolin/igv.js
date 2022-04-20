import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'js/index.js',
    output: [
      { file: 'dist/igv.esm.js', format: 'es' },
      {
        file: 'dist/igv.esm.min.js',
        format: 'es',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },

  {
    input: 'js/index.js',
    output: [
      { file: 'dist/igv.js', format: 'umd', name: 'igv' },
      {
        file: 'dist/igv.min.js',
        format: 'umd',
        name: 'igv',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [commonjs(), nodeResolve(), babel()],
  },
]
