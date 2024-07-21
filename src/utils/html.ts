/**
 * Tagged template literal to make VSCode highlight the string as HTML.
 * This doesn't actually do anything.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw#building_an_identity_tag
 */
function html(strings, ...values) {
  return String.raw({ raw: strings }, ...values)
}

export { html }
