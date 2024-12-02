import { SlateElement } from '../slate-element.js'

class Field extends SlateElement {}

if (!customElements.get('slate-field')) {
  customElements.define('slate-field', Field)
}

export { Field }
