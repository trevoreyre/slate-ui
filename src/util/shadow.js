const values = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner']

export const validator = value => values.includes(value)

export function shadowClass() {
  return {
    [`shadow-${this.shadow}`]: this.shadow,
  }
}

export const shadowProps = {
  shadow: { type: String, validator },
}

export const shadowMixin = {
  props: shadowProps,
  computed: {
    shadowClass,
  },
}
