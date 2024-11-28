import { SlateElement } from '../slate-element.js'

class Heading extends SlateElement {
  static properties = {
    level: { type: String, reflect: true },
    heading: { type: String, reflect: true },
    size: { type: String, reflect: true },
    transform: { type: String, reflect: true },
    variant: { type: String, reflect: true },
    weight: { type: String, reflect: true },
    wrap: { type: String, reflect: true },
  }

  constructor() {
    super()
    this.level = '2'
    this.role = 'heading'
  }
}

if (!customElements.get('slate-heading')) {
  customElements.define('slate-heading', Heading)
}

export { Heading }
