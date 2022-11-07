import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import babel from '@rollup/plugin-babel'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    plugins: [
      typescript(),
      babel({
        babelHelpers: 'bundled',
				exclude: 'node_modules/**',
      	extensions: ['.js', '.ts'],
      })
    ]
  },
  {
    input: './typings/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
]
