import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: [
      'src/index.ts',
      'src/Defaults/site.ts',
      'src/Http/index.ts',
      'src/Types/index.ts',
    ],
    format: ['cjs', 'esm'],
    target: 'node20',
    platform: 'node',
    dts: {
      resolve: true,
      entry: [
        'src/index.ts',
        'src/Defaults/site.ts',
        'src/Http/index.ts',
        'src/Types/index.ts',
      ],
    },
    bundle: true,
    minifySyntax: true,
    minifyWhitespace: false,
    minifyIdentifiers: false,
    clean: true,
    sourcemap: true,
    minify: false,
    splitting: false,
    treeshake: true,
    shims: false,
    esbuildOptions(options) {
      options.conditions = ['module', 'import', 'require', 'node']
      options.platform = 'node'
      options.target = 'node20'
    },
    noExternal: [/@types\/.*/],
    tsconfig: './tsconfig.json',
    outDir: 'dist',
    silent: false,
    verbose: true,
  },
  {
    entry: ['src/Browser/index.ts'],
    format: ['iife'],
    target: 'es2019',
    platform: 'browser',
    dts: false,
    clean: true,
    sourcemap: true,
    minify: true,
    splitting: false,
    treeshake: true,
    globalName: 'btch',
    esbuildOptions(options) {
      options.conditions = ['module', 'import', 'browser']
      options.platform = 'browser'
      options.target = 'es2019'
      options.inject = []
    },
    outDir: 'dist/browser',
    outExtension() {
      return { js: '.js' }
    },
  },
  {
    entry: ['src/Browser/index.ts'],
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
      options.conditions = ['module', 'import', 'browser']
      options.platform = 'browser'
      options.target = 'es2019'
      options.inject = []
    },
    outDir: 'dist/browser',
    outExtension() {
      return { js: '.min.js' }
    },
  },
])