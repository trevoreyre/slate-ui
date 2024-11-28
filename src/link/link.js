import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

class Link extends LitElement {
  static properties = {
    display: { type: String, reflect: true },
    href: { type: String, reflect: true },
    target: { type: String, reflect: true },
    rel: { type: String, reflect: true },
  }

  render() {
    const target = this.target
    const rel =
      this.rel ?? (target === '_blank' ? 'noreferrer noopener' : undefined)

    return html`
      <a part="host" href=${this.href} target=${target} rel=${ifDefined(rel)}>
        <slot></slot>
      </a>
    `
  }
}

if (!customElements.get('slate-link')) {
  customElements.define('slate-link', Link)
}

export { Link }
