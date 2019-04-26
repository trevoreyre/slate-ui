const alignValidator = value => {
  return ['left', 'center', 'right'].includes(value)
}

const sizeValidator = value => {
  return ['s', 'm', 'l'].includes(value)
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

export {
  alignValidator,
  sizeValidator,
  spacingValidator,
  themeValidator,
  themeBackgroundValidator,
}
