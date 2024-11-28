import { SlateElement } from '../slate-element.js'

class AppNavContent extends SlateElement {
  static properties = {
    gap: { type: String, reflect: true },
  }

  constructor() {
    super()
    this.gap = 'md'
  }
}

if (!customElements.get('slate-app-nav-content')) {
  customElements.define('slate-app-nav-content', AppNavContent)
}

export { AppNavContent }
