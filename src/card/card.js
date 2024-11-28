import { SlateElement } from '../slate-element.js'

class Card extends SlateElement {
  static properties = {
    radius: { type: String, reflect: true },
    shadow: { type: String, reflect: true },
  }
}

if (!customElements.get('slate-card')) {
  customElements.define('slate-card', Card)
}

export { Card }
