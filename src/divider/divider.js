import { SlateElement } from '../slate-element.js'

class Divider extends SlateElement {}

if (!customElements.get('slate-divider')) {
  customElements.define('slate-divider', Divider)
}

export { Divider }
