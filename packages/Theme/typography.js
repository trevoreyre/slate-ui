import { spacingMixin } from './spacing'

export const TYPOGRAPHY_THEMES = ['primary', 'secondary']
export const LINE_HEIGHTS = ['none', 'sm', 'md', 'lg']
export const FONT_WEIGHTS = ['light', 'normal', 'bold']
export const LETTER_SPACINGS = ['sm', 'md', 'lg', 'xl']
export const FONT_SIZES = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
]

export const validateTypographyTheme = value =>
  TYPOGRAPHY_THEMES.includes(value)
export const validateLineHeight = value => LINE_HEIGHTS.includes(value)
export const validateFontWeight = value => FONT_WEIGHTS.includes(value)
export const validateLetterSpacing = value => LETTER_SPACINGS.includes(value)
export const valdateFontSize = value => FONT_SIZES.includes(value)

export const typographyProps = {
  theme: {
    type: String,
    default: 'primary',
    validator: validateTypographyTheme,
  },
  disabled: Boolean,
  fontSize: { type: String, validator: valdateFontSize },
  fontWeight: { type: String, validator: validateFontWeight },
  lineHeight: { type: String, validator: validateLineHeight },
  letterSpacing: { type: String, validator: validateLetterSpacing },
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
