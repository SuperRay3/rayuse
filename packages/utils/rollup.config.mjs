import typescript from 'rollup-plugin-typescript2'
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
  // tree
  {
    input: 'src/tree/index.ts',
    output: {
      file: 'dist/tree/index.esm.js',
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
  }
]
