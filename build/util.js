import path from 'path'
import { promises as fs } from 'fs'

// Traverses all directories and subdirectories, and returns an array of file
// paths. Use regexFilter to filter files by name, extension, etc.
export const getFiles = async (dir, regexFilter) => {
  const subdirs = await fs.readdir(dir)
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = path.resolve(dir, subdir)
      return (await fs.stat(res)).isDirectory()
        ? getFiles(res, regexFilter)
        : res
    })
  )

  return Array.prototype.concat(...files).filter(file => {
    return regexFilter ? regexFilter.test(file) : file
  })
}

// Takes a file path, and returns an object with component name/info
// Ex.
// ['packages/Button/Button.vue'].map(mapFileToComponent('packages', 'vue'))
// Returns [{ name: 'Button', path: './Button/Button.vue' }]
export const mapFileToComponent = (baseDir, extension) => file => ({
  name: path.basename(file, extension),
  path: file.replace(baseDir, '.'),
})
