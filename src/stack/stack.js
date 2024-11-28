import { SlateElement } from '../slate-element.js'

class Stack extends SlateElement {
  static properties = {
    align: { type: String, reflect: true },
    direction: { type: String, reflect: true },
    gap: { type: String, reflect: true },
    justify: { type: String, reflect: true },
    wrap: { type: Boolean, reflect: true },
  }
}

if (!customElements.get('slate-stack')) {
  customElements.define('slate-stack', Stack)
}

export { Stack }
