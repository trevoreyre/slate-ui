import { css, html, LitElement, nothing } from 'lit'
import { normalize } from '../normalize.css.js'

class LinkBlock extends LitElement {
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
      a {
        display: block;
        box-sizing: border-box;
        position: relative;
        text-decoration: none;
      }
    `,
  ]
}

if (!customElements.get('slate-link-block')) {
  customElements.define('slate-link-block', LinkBlock)
}
export { LinkBlock }
