const values = [
  'none',
  '4xs',
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  'auto',
]

export const validator = value => values.includes(value)

export function paddingClass() {
  return {
    [`p-${this.p || this.padding}`]: this.p || this.padding,
    [`pt-${this.pt || this.paddingTop}`]: this.pt || this.paddingTop,
    [`pr-${this.pr || this.paddingRight}`]: this.pr || this.paddingRight,
    [`pb-${this.pb || this.paddingBottom}`]: this.pb || this.paddingBottom,
    [`pl-${this.pl || this.paddingLeft}`]: this.pl || this.paddingLeft,
    [`px-${this.px || this.paddingX}`]: this.px || this.paddingX,
    [`py-${this.py || this.paddingY}`]: this.py || this.paddingY,
  }
}

export function marginClass() {
  return {
    [`m-${this.m || this.margin}`]: this.m || this.margin,
    [`mt-${this.mt || this.marginTop}`]: this.mt || this.marginTop,
    [`mr-${this.mr || this.marginRight}`]: this.mr || this.marginRight,
    [`mb-${this.mb || this.marginBottom}`]: this.mb || this.marginBottom,
    [`ml-${this.ml || this.marginLeft}`]: this.ml || this.marginLeft,
    [`mx-${this.mx || this.marginX}`]: this.mx || this.marginX,
    [`my-${this.my || this.marginY}`]: this.my || this.marginY,
  }
}

export function spacingClass() {
  return {
    ...paddingClass.bind(this)(),
    ...marginClass.bind(this)(),
  }
}

export const paddingProps = {
  padding: { type: String, validator },
  paddingTop: { type: String, validator },
  paddingRight: { type: String, validator },
  paddingBottom: { type: String, validator },
  paddingLeft: { type: String, validator },
  paddingX: { type: String, validator },
  paddingY: { type: String, validator },
  p: { type: String, validator },
  pt: { type: String, validator },
  pr: { type: String, validator },
  pb: { type: String, validator },
  pl: { type: String, validator },
  px: { type: String, validator },
  py: { type: String, validator },
}

export const marginProps = {
  margin: { type: String, validator },
  marginTop: { type: String, validator },
  marginRight: { type: String, validator },
  marginBottom: { type: String, validator },
  marginLeft: { type: String, validator },
  marginX: { type: String, validator },
  marginY: { type: String, validator },
  m: { type: String, validator },
  mt: { type: String, validator },
  mr: { type: String, validator },
  mb: { type: String, validator },
  ml: { type: String, validator },
  mx: { type: String, validator },
  my: { type: String, validator },
}

export const spacingProps = {
  ...paddingProps,
  ...marginProps,
}

export const paddingMixin = {
  props: paddingProps,
  computed: {
    paddingClass,
  },
}

export const marginMixin = {
  props: marginProps,
  computed: {
    marginClass,
  },
}

export const spacingMixin = {
  props: spacingProps,
  computed: {
    spacingClass,
  },
}
