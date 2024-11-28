import { html } from 'lit'
import { SlateElement } from '../slate-element.js'

class AppNavMenuButton extends SlateElement {
  static properties = {
    label: { type: String, reflect: true },
  }

  constructor() {
    super()
    this.label = 'Main menu'
  }

  render() {
    return html`
      <button aria-label=${this.label}>
        <svg
          slate-icon-menu
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg
          slate-icon-close
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `
  }
}

if (!customElements.get('slate-app-nav-menu-button')) {
  customElements.define('slate-app-nav-menu-button', AppNavMenuButton)
}

export { AppNavMenuButton }
