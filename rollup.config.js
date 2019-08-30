import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
//import nested from 'postcss-nested';
//import cssnext from 'postcss-cssnext';
//import cssnano from 'cssnano';

export default {
  input: 'src/app.js',
  plugins: [
    resolve({mainFields: ['module','main']}),
    postcss({
      plugins: [simplevars()],
      extensions: ['.css', '.scss', '.sass'],
    }),
    babel({
      runtimeHelpers: true,
      presets: ['@babel/preset-env']
    }),
    serve()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    exports: 'named',
    file: './dist/index.js',
    format: 'iife',
    name: 'heresy'
  }
};