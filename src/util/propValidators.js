const alignValidator = value => {
  return ['left', 'center', 'right'].includes(value)
}

const sizeValidator = value => {
  return ['sm', 'md', 'lg'].includes(value)
}

const spacingValidator = value => {
  return ['xs', 's', 'm', 'l', 'xl', 'xxl'].includes(value)
}

const themeValidator = value => {
  return ['neutral', 'primary', 'secondary'].includes(value)
}

const themeBackgroundValidator = value => {
  return ['default', 'light'].includes(value)
}

const booleanStringValidator = value => ['true', 'false'].includes(value)

export {
  alignValidator,
  sizeValidator,
  spacingValidator,
  themeValidator,
  themeBackgroundValidator,
  booleanStringValidator,
}
