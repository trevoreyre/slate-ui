import path from 'path'
import { fileURLToPath } from 'url'
import { promises as fs } from 'fs'
import kebabCase from 'lodash/kebabCase.js'

const filename = fileURLToPath(import.meta.url)
const cwd = path.dirname(filename)

const paths = {
  root: path.resolve(cwd, '..'),
  packages: path.resolve(cwd, '../packages'),
  templateIndexJs: path.resolve(cwd, 'template/index.js'),
  templatePackageJson: path.resolve(cwd, 'template/package.json'),
  templateLICENSE: path.resolve(cwd, 'template/LICENSE'),
}

const createIndexJs = async name => {
  const indexJsPath = path.resolve(paths.packages, name, 'index.js')
  let indexJs = await fs.readFile(paths.templateIndexJs, 'utf8')
  indexJs = indexJs.replace(/{name}/g, name)
  await fs.writeFile(indexJsPath, indexJs)
}

const createPackageJson = async (name, version) => {
  const packageJsonPath = path.resolve(paths.packages, name, 'package.json')
  let packageJson = await fs.readFile(paths.templatePackageJson, 'utf8')
  packageJson = packageJson.replace(/{name}/g, kebabCase(name))
  packageJson = packageJson.replace(/{version}/g, version)
  await fs.writeFile(packageJsonPath, packageJson)
}

const createLicense = async name => {
  const licensePath = path.resolve(paths.packages, name, 'LICENSE')
  const license = await fs.readFile(paths.templateLICENSE, 'utf8')
  await fs.writeFile(licensePath, license)
}

;(async () => {
  const lernaFile = await fs.readFile(
    path.resolve(paths.root, 'lerna.json'),
    'utf8'
  )
  const lernaConfig = JSON.parse(lernaFile)
  const packages = await fs.readdir(paths.packages)

  packages.forEach(async packageName => {
    await Promise.all([
      createIndexJs(packageName),
      createPackageJson(packageName, lernaConfig.version),
      createLicense(packageName),
    ])
  })
})()
