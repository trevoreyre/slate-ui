import { html, css, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

export class Badge extends LitElement {
  render() {
    return html`
      <slot></slot>
    `
  }

  static styles = [
    normalize,
    css`
      :host {
        border-radius: var(--border-radius-full);
        padding: var(--spacing-3xs);
        min-inline-size: calc(2 * var(--spacing-3xs) + var(--font-size-xs));
        display: block;
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(33%, -33%);
        transform-origin: 100% 0%;
        background: hsl(var(--color-neutral-500));
        color: hsl(var(--color-neutral-0));
        font-size: var(--font-size-xs);
        text-align: center;
        line-height: 1;
      }
    `,
  ]
}

if (!customElements.get('slate-badge')) {
  customElements.define('slate-badge', Badge)
}
