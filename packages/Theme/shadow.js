export const SHADOWS = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner']

export const validateShadow = value => SHADOWS.includes(value)

export function shadowClass() {
  return {
    [`shadow-${this.shadow}`]: this.shadow,
  }
}

export const shadowProps = {
  shadow: { type: String, validator: validateShadow },
}

export const shadowMixin = {
  props: shadowProps,
  computed: {
    shadowClass,
  },
}
