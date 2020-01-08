import path from 'path'
import { promises as fs } from 'fs'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy'

const paths = {
  packages: path.resolve(__dirname, 'packages'),
}

// Creates three bundles, a UMD bundle for Node, an ES modules bundle for Webpack,
// Rollup, etc., and an IIFE bundle for use in the browser in a <script> tag.
// All three bundles are transpiled to ES5 (with exception of the import/export
// statements in the ES bundle). Function is async to allow importing package.json
// file to reference for bundle names.
const createConfig = async ({ name, root }) => {
  const pkg = await import(`${root}/package.json`)

  return Promise.resolve([
    {
      input: `${root}/index.js`,
      output: [
        {
          file: `${root}/dist/${pkg.module}`,
          format: 'esm',
        },
        {
          name: pkg.main,
          file: `${root}/dist/${pkg.main}`,
          format: 'umd',
        },
        {
          name: `Slate${name === 'Core' ? 'UI' : name}`,
          file: `${root}/dist/${pkg.unpkg}`,
          format: 'iife',
          plugins: [terser()],
        },
      ],
      plugins: [
        // TODO: Need to figure out the best way to dedupe babel runtime.
        // TODO: Probably don't want nodeResolve. Or at least mark most stuff as external.
        nodeResolve(),
        babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
        postcss({ extract: `${root}/dist/${pkg.style}`, minimize: true }),
        commonjs(),
        vue({ css: false, template: { isProduction: true } }),
        copy({
          targets: [
            {
              src: [`${root}/*`, `!${root}/*.stories.js`],
              dest: `${root}/dist`,
            },
          ],
        }),
      ],
    },
  ])
}

const config = async () => {
  const packages = await fs.readdir(paths.packages)

  const packageConfigs = await Promise.all(
    packages.map(async name => {
      return Promise.resolve(
        createConfig({ name, root: path.resolve(paths.packages, name) })
      )
    })
  )

  const mergedPackageConfigs = Array.prototype.concat(...packageConfigs)
  return Promise.resolve(mergedPackageConfigs)
}

export default config
