import { validateBooleanString } from './props.js'
import { marginMixin } from './spacing.js'
import { FONT_SIZES } from './typography.js'

export const ICON_THEMES = ['primary', 'secondary']

export const validateIconSize = value => FONT_SIZES.includes(value)
export const validateIconTheme = value => ICON_THEMES.includes(value)

export const iconProps = {
  size: { type: String, default: 'lg', validator: validateIconSize },
  theme: { type: String, default: 'primary', validator: validateIconTheme },
  // TODO: Validate using boolean true/false with this prop
  ariaHidden: {
    type: [Boolean, String],
    default: 'true',
    validator: validateBooleanString,
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
    `size-${this.size}`,
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
