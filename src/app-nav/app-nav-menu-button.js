import { html, css, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

class AppNavMenuButton extends LitElement {
  static properties = {
    'aria-label': { attribute: false, type: String },
  }

  constructor() {
    super()
    this['aria-label'] = 'Main menu'
  }

  render() {
    return html`
      <button part="host" aria-label=${this['aria-label']}>
        <slot>
          <svg
            part="icon"
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
        </slot>
      </button>
    `
  }

  static styles = [
    normalize,
    css`
      button {
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        inline-size: var(--size-lg);
        block-size: var(--size-lg);
        appearance: none;
        background-color: transparent;
      }
    `,
  ]
}

if (!customElements.get('slate-app-nav-menu-button')) {
  customElements.define('slate-app-nav-menu-button', AppNavMenuButton)
}
export { AppNavMenuButton }
