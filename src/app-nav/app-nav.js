import { html } from 'lit'
import { SlateElement } from '../slate-element.js'

class AppNav extends SlateElement {
  static properties = {
    align: { type: String, reflect: true },
    gap: { type: String, reflect: true },
    justify: { type: String, reflect: true },
    role: { type: String, reflect: true },
    wrap: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this.role = 'navigation'
    this.open = false
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('click', ({ target }) => {
      if (
        target.closest('slate-app-nav-menu-button, [slate-app-nav-menu-button]')
      ) {
        this.open = !this.open
      }
    })
  }
}

if (!customElements.get('slate-app-nav')) {
  customElements.define('slate-app-nav', AppNav)
}

export { AppNav }
