import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['lib/Browser/index.ts'],
    format: ['iife'],
    target: 'es2019',
    platform: 'browser',
    dts: false,
    clean: false,
    sourcemap: true,
    minify: true,
    splitting: false,
    treeshake: true,
    globalName: 'btch',
    esbuildOptions(options) {
      options.conditions = ['module', 'import', 'browser'];
      options.platform = 'browser';
      options.target = 'es2019';
    },
    outDir: 'dist/browser',
    outExtension() {
      return { js: '.js' };
    },
  },
  {
    entry: ['lib/Browser/index.ts'],
    format: ['iife'],
    target: 'es2019',
    platform: 'browser',
    dts: false,
    clean: false,
    sourcemap: true,
    minify: true,
    splitting: false,
    treeshake: true,
    globalName: 'btch',
    esbuildOptions(options) {
      options.conditions = ['module', 'import', 'browser'];
      options.platform = 'browser';
      options.target = 'es2019';
    },
    outDir: 'dist/browser',
    outExtension() {
      return { js: '.min.js' };
    },
  },
]);