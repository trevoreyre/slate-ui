const alignValidator = value => {
  return ['left', 'center', 'right'].includes(value)
}

const sizeValidator = value => {
  return ['small', 'medium', 'large'].includes(value)
}

const themeValidator = value => {
  return ['neutral', 'primary', 'secondary'].includes(value)
}

export { alignValidator, sizeValidator, themeValidator }
