// plugins
// npm plugins
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// local plugins
import consts from './@rp/consts';

// local modules
import constsMap from './src/conf/consts';

export default {
  input: 'src/app/index.ts',
  output: {
    dir: 'build',
    format: 'esm',
  },
  plugins: [resolve(), typescript(), consts(constsMap)],
};
