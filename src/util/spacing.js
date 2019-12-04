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

export const spacingValidator = value => values.includes(value)

export const paddingProps = {
  padding: { type: String, validator: spacingValidator },
  paddingTop: { type: String, validator: spacingValidator },
  paddingRight: { type: String, validator: spacingValidator },
  paddingBottom: { type: String, validator: spacingValidator },
  paddingLeft: { type: String, validator: spacingValidator },
  paddingX: { type: String, validator: spacingValidator },
  paddingY: { type: String, validator: spacingValidator },
  p: { type: String, validator: spacingValidator },
  pt: { type: String, validator: spacingValidator },
  pr: { type: String, validator: spacingValidator },
  pb: { type: String, validator: spacingValidator },
  pl: { type: String, validator: spacingValidator },
  px: { type: String, validator: spacingValidator },
  py: { type: String, validator: spacingValidator },
}

export const marginProps = {
  margin: { type: String, validator: spacingValidator },
  marginTop: { type: String, validator: spacingValidator },
  marginRight: { type: String, validator: spacingValidator },
  marginBottom: { type: String, validator: spacingValidator },
  marginLeft: { type: String, validator: spacingValidator },
  marginX: { type: String, validator: spacingValidator },
  marginY: { type: String, validator: spacingValidator },
  m: { type: String, validator: spacingValidator },
  mt: { type: String, validator: spacingValidator },
  mr: { type: String, validator: spacingValidator },
  mb: { type: String, validator: spacingValidator },
  ml: { type: String, validator: spacingValidator },
  mx: { type: String, validator: spacingValidator },
  my: { type: String, validator: spacingValidator },
}

export const spacingProps = {
  ...paddingProps,
  ...marginProps,
}

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
