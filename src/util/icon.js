import { booleanStringValidator } from './propValidators'
import { marginMixin } from './spacing'

const sizes = ['sm', 'md', 'lg']
const themes = ['primary', 'secondary']

export const sizeValidator = value => sizes.includes(value)
export const themeValidator = value => themes.includes(value)

export const iconProps = {
  size: { type: String, default: 'md', validator: sizeValidator },
  theme: { type: String, default: 'primary', validator: themeValidator },
  ariaHidden: {
    type: String,
    default: 'true',
    validator: booleanStringValidator,
  },
  xlmns: { type: String, default: 'http://www.w3.org/2000/svg' },
  fill: { type: String, default: 'none' },
  width: { type: Number, default: 24 },
  height: { type: Number, default: 24 },
  viewBox: { type: String, default: '0 0 24 24' },
}

export function iconClass() {
  return [
    'icon',
    this.theme,
    this.size,
    this.marginClass,
    {
      [`on-${this.backgroundColor}`]: this.backgroundColor !== 'default',
    },
  ]
}

export const iconMixin = {
  mixins: [marginMixin],
  inject: {
    backgroundColor: { default: 'default' },
  },
  props: iconProps,
  computed: {
    iconClass,
    iconProps() {
      return {
        'aria-hidden': this.ariaHidden,
        xlmns: this.xlmns,
        fill: this.fill,
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
      }
    },
  },
}
