import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      { format: 'cjs', file: 'lib/index.cjs.js', exports: 'named' },
      { format: 'es', file: 'lib/index.esm.js', exports: 'named' },
    ],
    plugins: [
      typescript({
        exclude: "**/__tests__/**"
      }),
    ],
  }, {
    input: 'src/index.ts',
    output: [{ dir: 'types', format: 'es' }],
    plugins: [
      dts({}),
    ],
  }
];