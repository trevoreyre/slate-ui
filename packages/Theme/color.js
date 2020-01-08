export const COLORS = [
  'brand-primary',
  'text-primary',
  'text-secondary',
  'text-disabled',
]
export const BG_COLORS = ['light', 'normal', 'brand-primary']

export const validateColor = value => COLORS.includes(value)
export const validateBgColor = value => BG_COLORS.includes(value)

export const colorProps = {
  color: { type: String, validator: validateColor },
  backgroundColor: { type: String, validator: validateBgColor },
  bgColor: { type: String, validator: validateBgColor },
}

export function colorClass() {
  return {
    [`color-${this.color}`]: this.color,
    [`on-${this.bgColor || this.backgroundColor}`]:
      this.bgColor || this.backgroundColor,
    [`bg-color-${this.bgColor || this.backgroundColor}`]:
      this.bgColor || this.backgroundColor,
  }
}

export const colorMixin = {
  provide() {
    return {
      backgroundColor: this.bgColor || this.backgroundColor,
    }
  },
  props: colorProps,
  computed: {
    colorClass,
  },
}
