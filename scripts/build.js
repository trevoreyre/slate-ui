const path = require('path')
const fs = require('fs-extra')
const spawn = require('cross-spawn')

const paths = {
  root: path.resolve(__dirname, '..'),
  build: path.resolve(__dirname, '..', 'dist'),
  src: path.resolve(__dirname, '..', 'src'),
  components: path.resolve(__dirname, '..', 'src', 'components'),
}

function build(filePath, subDir) {
  const { name } = path.parse(filePath)
  const dest = path.resolve(paths.build, (subDir ? name : ''))
  spawn.sync(
    'npm',
    ['run', 'vue-cli-build', '--', '--name', name, '--dest', dest, filePath],
    { stdio: 'inherit', cwd: paths.root }
  )
}

// Build main library entrypoint
build(path.resolve(paths.src, 'index.js'), false)

// Build all components in components directory
const components = fs.readdirSync(paths.components)
components.forEach(component => {
  build(path.resolve(paths.components, component), true)
})

// Rename index.common.js to index.js
fs.copySync(path.resolve(paths.build, 'index.common.js'), path.resolve(paths.build, 'index.js'))

// Rename all components' common bundles to index.js
const buildFiles = fs.readdirSync(paths.build)
buildFiles.forEach(file => {
  const filePath = path.resolve(paths.build, file)
  const stat = fs.lstatSync(filePath)
  if (stat.isDirectory()) {
    console.log('copying', file)
    fs.copySync(path.resolve(filePath, `${file}.common.js`), path.resolve(filePath, 'index.js'))
  }
})

// Copy package.json to build directory
fs.copySync(path.resolve(paths.root, 'package.json'), path.resolve(paths.build, 'package.json'))
