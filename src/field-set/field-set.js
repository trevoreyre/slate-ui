import { SlateElement } from '../slate-element.js'

class FieldSet extends SlateElement {}

if (!customElements.get('slate-field-set')) {
  customElements.define('slate-field-set', FieldSet)
}

export { FieldSet }
