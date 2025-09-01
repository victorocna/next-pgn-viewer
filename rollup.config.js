import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

// Main build configuration for JS/ES modules
const config = {
  input: 'index.js',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: false },
    { file: pkg.module, format: 'es', exports: 'named', sourcemap: false },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    external(),
    babel({
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      plugins: ['@babel/plugin-proposal-class-properties'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    postcss({
      extract: 'bundle.css',
      minimize: true,
    }),
    copy({
      targets: [{ src: 'assets/fonts/*', dest: 'dist/fonts' }],
    }),
    resolve(),
    commonjs({
      extensions: ['.js', '.jsx'],
      // Ensure lodash is not converted to CommonJS to preserve tree-shaking
      exclude: ['node_modules/lodash-es/**'],
    }),
    url({
      fileName: '[name][extname]',
      limit: 100000,
      include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf'],
      emitFiles: true,
    }),
    terser(),
  ],
};

export default config;
