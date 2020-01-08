import H1 from './H1.vue'
import H2 from './H2.vue'
import H3 from './H3.vue'
import H4 from './H4.vue'
import H5 from './H5.vue'
import H6 from './H6.vue'
import Label from './Label.vue'
import Overline from './Overline.vue'
import P from './P.vue'
import P2 from './P2.vue'
import Txt from './Txt.vue'
import Txt2 from './Txt2.vue'

const install = (Vue, { prefix = 'Slate' } = {}) => {
  if (install.installed) return
  install.installed = true

  Vue.component(`${prefix}H1`, H1)
  Vue.component(`${prefix}H2`, H2)
  Vue.component(`${prefix}H3`, H3)
  Vue.component(`${prefix}H4`, H4)
  Vue.component(`${prefix}H5`, H5)
  Vue.component(`${prefix}H6`, H6)
  Vue.component(`${prefix}Label`, Label)
  Vue.component(`${prefix}Overline`, Overline)
  Vue.component(`${prefix}P`, P)
  Vue.component(`${prefix}P2`, P2)
  Vue.component(`${prefix}Txt`, Txt)
  Vue.component(`${prefix}Txt2`, Txt2)
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

export default plugin
export { H1, H2, H3, H4, H5, H6, Label, Overline, P, P2, Txt, Txt2 }
