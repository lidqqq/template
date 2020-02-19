import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'esm',
  },
  plugins: [resolve(), typescript()],
};
