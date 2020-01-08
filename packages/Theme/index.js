import Theme from './Theme.vue'

const install = (Vue, { prefix = 'Slate' } = {}) => {
  if (install.installed) return
  install.installed = true
  Vue.component(`${prefix}Theme`, Theme)
}

const plugin = { install }

// Auto install if Vue is found
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Inject install function into component. Allows component to be registered via
// Vue.use() as well as Vue.component()
Theme.install = install

export default Theme
export * from './color.js'
export * from './icon.js'
export * from './props.js'
export * from './shadow.js'
export * from './spacing.js'
export * from './typography.js'
