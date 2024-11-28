import { SlateElement } from '../slate-element.js'

class Text extends SlateElement {
  static properties = {
    size: { type: String, reflect: true },
    transform: { type: String, reflect: true },
    variant: { type: String, reflect: true },
    weight: { type: String, reflect: true },
    wrap: { type: Boolean, reflect: true },
  }
}

if (!customElements.get('slate-text')) {
  customElements.define('slate-text', Text)
}

export { Text }
