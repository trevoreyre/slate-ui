const colors = [
  'brand-primary',
  'brand-secondary',
  'text-primary',
  'text-secondary',
  'text-disabled',
]

const bgColors = ['light', 'normal', 'brand-primary', 'brand-secondary']

export const colorValidator = value => colors.includes(value)
export const bgColorValidator = value => bgColors.includes(value)

export const colorProps = {
  color: { type: String, validator: colorValidator },
  backgroundColor: { type: String, validator: bgColorValidator },
  bgColor: { type: String, validator: bgColorValidator },
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
