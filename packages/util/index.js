export const toBoolean = value => {
  return typeof value === 'boolean' ? value : /true/i.test(value)
}
