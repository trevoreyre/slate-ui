import { css, html, LitElement, nothing } from 'lit'
import { normalize } from '../normalize.css.js'

class Link extends LitElement {
  static properties = {
    href: { type: String, reflect: true },

    target: { type: String, reflect: true },

    rel: { type: String, reflect: true },
  }

  render() {
    const target = this.target ?? nothing
    const rel =
      this.rel ?? (target === '_blank' ? 'noreferrer noopener' : nothing)

    return html`
      <a part="host" href=${this.href} target=${target} rel=${rel}>
        <slot></slot>
      </a>
    `
  }

  static styles = [
    normalize,
    css`
      :host,
      a {
        display: inline;
      }

      a {
        color: var(--color-brand-700);
        font-weight: var(--font-weight-bold);
        text-decoration: inherit;
      }

      :host(:hover) a {
        text-decoration: underline;
      }
    `,
  ]
}

if (!customElements.get('slate-link')) {
  customElements.define('slate-link', Link)
}
export { Link }
