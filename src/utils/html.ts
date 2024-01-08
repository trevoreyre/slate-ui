/**
 * Tagged template literal function that doesn't actually do anything,
 * but will make VSCode highlight the template literal as HTML.
 */
function html(strings, ...values) {
  let value = ''
  strings.forEach((string, index) => {
    value = `${value}${string}${values[index] ?? ''}`
  })
  return value
}

export { html }
