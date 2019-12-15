export const bool = value => {
  return typeof value === 'boolean' ? value : /true/i.test(value)
}
