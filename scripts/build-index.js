const path = require('path')
const { readdir, stat, writeFile } = require('fs').promises

const src = path.resolve(__dirname, '..', 'src')

// Traverses all directories and subdirectories, and returns an array of file
// paths for all .vue files
const getVueFiles = async dir => {
  const subdirs = await readdir(dir)
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = path.resolve(dir, subdir)
      return (await stat(res)).isDirectory() ? getVueFiles(res) : res
    })
  )

  return Array.prototype.concat(...files).filter(file => /\.vue$/.test(file))
}

// Takes an array of .vue file paths, and maps to relative path and component name
const getComponents = files =>
  files.map(file => ({
    path: file.replace(src, '.'),
    name: path.basename(file, '.vue'),
  }))

const getIndexFileContent = components => `\
// THIS FILE IS AUTOMATICALLY GENERATED
${components
  .map(component => `import ${component.name} from '${component.path}'`)
  .join('\n')}

// Install components globally
const install = Vue => {
${components
  .map(component => `  Vue.component('${component.name}', ${component.name})`)
  .join('\n')}
}

// Export library as a plugin, and individual components
export default { install }
export {
  ${components.map(component => component.name).join(',\n  ')},
}
`

getVueFiles(src).then(files => {
  const components = getComponents(files)
  const indexFile = getIndexFileContent(components)
  writeFile(path.resolve(src, 'index.js'), indexFile)
})
