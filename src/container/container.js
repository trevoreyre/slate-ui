import { SlateElement } from '../slate-element.js'

class Container extends SlateElement {
  static properties = {
    size: { type: String, reflect: true },
    align: { type: String, reflect: true },
  }
}

if (!customElements.get('slate-container')) {
  customElements.define('slate-container', Container)
}

export { Container }
