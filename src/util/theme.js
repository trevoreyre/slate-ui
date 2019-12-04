export const getStyle = (name, prop) => {
  return {
    ['--' + name]: prop && `var(--${name}-${prop})`,
  }
}
