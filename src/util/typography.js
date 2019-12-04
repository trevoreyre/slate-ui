import { spacingMixin } from './spacing'

const themes = ['primary', 'secondary']
const lineHeights = ['none', 'sm', 'md', 'lg']
const fontWeights = ['light', 'normal', 'bold']
const letterSpacings = ['normal', 'sm', 'md', 'lg', 'xl']
const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']

export const themeValidator = value => themes.includes(value)
export const lineHeightValidator = value => lineHeights.includes(value)
export const fontWeightValidator = value => fontWeights.includes(value)
export const letterSpacingValidator = value => letterSpacings.includes(value)
export const fontSizeValidator = value => fontSizes.includes(value)

export const typographyProps = {
  theme: { type: String, default: 'primary', validator: themeValidator },
  disabled: Boolean,
  fontSize: { type: String, validator: fontSizeValidator },
  fontWeight: { type: String, validator: fontWeightValidator },
  lineHeight: { type: String, validator: lineHeightValidator },
  letterSpacing: { type: String, validator: letterSpacingValidator },
}

export function typographyClass() {
  return [
    'typography',
    this.theme,
    this.spacingClass,
    {
      disabled: this.disabled,
      [`on-${this.backgroundColor}`]: this.backgroundColor !== 'default',
    },
  ]
}

export function typographyStyle() {
  return {
    '--font-size': this.fontSize && `var(--font-size-${this.fontSize})`,
    '--font-weight': this.fontWeight && `var(--font-weight-${this.fontWeight})`,
    '--line-height': this.lineHeight && `var(--line-height-${this.lineHeight})`,
    '--letter-spacing':
      this.letterSpacing && `var(--letter-spacing-${this.letterSpacing})`,
  }
}

export const typographyMixin = {
  mixins: [spacingMixin],
  inject: {
    headingLevel: { default: 2 },
    backgroundColor: { default: 'default' },
  },
  props: typographyProps,
  computed: {
    typographyStyle,
    typographyClass,
  },
}
