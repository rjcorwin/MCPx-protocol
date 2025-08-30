import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts', 'src/cli-blessed.ts', 'src/cli-terminal.ts'],
  format: ['cjs'],
  shims: true,
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  target: 'node18',
  outDir: 'dist',
  external: [],
  treeshake: true,
});