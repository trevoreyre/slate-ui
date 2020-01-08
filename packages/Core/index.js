import AppBar from '@slate-ui/app-bar'
import Autocomplete from '@slate-ui/autocomplete'
import Badge from '@slate-ui/badge'
import Button from '@slate-ui/button'
import ButtonIcon from '@slate-ui/button-icon'
import Card from '@slate-ui/card'
import Container from '@slate-ui/container'
import Css from '@slate-ui/css'
import Icon from '@slate-ui/icon'
import Img from '@slate-ui/img'
import ImgProvider from '@slate-ui/img-provider'
import Input from '@slate-ui/input'
import Tag from '@slate-ui/tag'
import Theme from '@slate-ui/theme'
import Typography, {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  Overline,
  P,
  P2,
  Txt,
  Txt2,
} from '@slate-ui/typography'

// Install components globally
const install = (Vue, options) => {
  if (install.installed) return
  install.installed = true

  Vue.use(AppBar, options)
  Vue.use(Autocomplete, options)
  Vue.use(Badge, options)
  Vue.use(Button, options)
  Vue.use(Button, options)
  Vue.use(ButtonIcon, options)
  Vue.use(Card, options)
  Vue.use(Container, options)
  Vue.use(Css, options)
  Vue.use(Icon, options)
  Vue.use(Img, options)
  Vue.use(ImgProvider, options)
  Vue.use(Input, options)
  Vue.use(Tag, options)
  Vue.use(Theme, options)
  Vue.use(Typography, options)
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
export {
  AppBar,
  Autocomplete,
  Badge,
  Button,
  ButtonIcon,
  Card,
  Container,
  Css,
  Icon,
  Img,
  ImgProvider,
  Input,
  Tag,
  Theme,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  Overline,
  P,
  P2,
  Txt,
  Txt2,
}
export * from '@slate-ui/theme'
export * from '@slate-ui/util'
