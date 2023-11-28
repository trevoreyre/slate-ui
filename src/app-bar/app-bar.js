import { html, css, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

export class AppBar extends LitElement {
  render() {
    return html`
      <slot></slot>
    `
  }

  static styles = [
    normalize,
    css`
      :host {
        /* display: flex; */
        inline-size: 100%;
        /* align-items: center; */
        /* justify-content: space-between; */
        border-block-end: 1px solid hsl(var(--color-border));
        background: hsl(var(--color-background-primary));
        /* padding: var(--spacing-sm); */
      }

      /* :host(:where([variant='primary'])) {
        background: hsl(var(--color-background-primary));
      }
      :host(:where([variant='secondary'])) {
        background: hsl(var(--color-background-secondary));
      }

      :host(:where([size='sm'])) {
        padding: var(--spacing-xs) var(--spacing-sm);
      }
      :host(:where([size='md'])) {
        padding: var(--spacing-sm);
      }
      :host(:where([size='lg'])) {
        padding: var(--spacing-4xl) var(--spacing-sm);
      } */
    `,
  ]
}

if (!customElements.get('slate-app-bar')) {
  customElements.define('slate-app-bar', AppBar)
}
