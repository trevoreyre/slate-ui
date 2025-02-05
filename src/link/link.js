import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { SlateElement } from '../slate-element.js'

class Link extends SlateElement {
  static properties = {
    display: { type: String, reflect: true },
    href: { type: String, reflect: true },
    target: { type: String, reflect: true },
    rel: { type: String, reflect: true },
  }
}

if (!customElements.get('slate-link')) {
  customElements.define('slate-link', Link)
}

export { Link }
