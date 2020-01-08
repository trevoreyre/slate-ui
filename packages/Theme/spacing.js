export const SPACINGS = [
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

export const validateSpacing = value => SPACINGS.includes(value)

export const paddingProps = {
  padding: { type: String, validator: validateSpacing },
  paddingTop: { type: String, validator: validateSpacing },
  paddingRight: { type: String, validator: validateSpacing },
  paddingBottom: { type: String, validator: validateSpacing },
  paddingLeft: { type: String, validator: validateSpacing },
  paddingX: { type: String, validator: validateSpacing },
  paddingY: { type: String, validator: validateSpacing },
  p: { type: String, validator: validateSpacing },
  pt: { type: String, validator: validateSpacing },
  pr: { type: String, validator: validateSpacing },
  pb: { type: String, validator: validateSpacing },
  pl: { type: String, validator: validateSpacing },
  px: { type: String, validator: validateSpacing },
  py: { type: String, validator: validateSpacing },
}

export const marginProps = {
  margin: { type: String, validator: validateSpacing },
  marginTop: { type: String, validator: validateSpacing },
  marginRight: { type: String, validator: validateSpacing },
  marginBottom: { type: String, validator: validateSpacing },
  marginLeft: { type: String, validator: validateSpacing },
  marginX: { type: String, validator: validateSpacing },
  marginY: { type: String, validator: validateSpacing },
  m: { type: String, validator: validateSpacing },
  mt: { type: String, validator: validateSpacing },
  mr: { type: String, validator: validateSpacing },
  mb: { type: String, validator: validateSpacing },
  ml: { type: String, validator: validateSpacing },
  mx: { type: String, validator: validateSpacing },
  my: { type: String, validator: validateSpacing },
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
