export const SIZES = ['sm', 'md', 'lg']

export const validateSize = value => SIZES.includes(value)

export const validateBooleanString = value =>
  typeof value === 'boolean' || /true|false/i.test(value)
