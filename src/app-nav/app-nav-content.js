import { SlateElement } from '../slate-element.js'

class AppNavContent extends SlateElement {
  static properties = {
    gap: { type: String, reflect: true },
  }
}

if (!customElements.get('slate-app-nav-content')) {
  customElements.define('slate-app-nav-content', AppNavContent)
}
export { AppNavContent }
