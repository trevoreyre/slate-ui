import { css, html, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

export class Content extends LitElement {
  render() {
    return html`
      <slot></slot>
    `
  }

  static styles = [
    normalize,
    css`
      ::slotted(h2),
      ::slotted(h3),
      ::slotted(h4),
      ::slotted(h5),
      ::slotted(h6) {
        font-family: var(--font-family-heading);
      }

      ::slotted(h1) {
        font-size: var(--font-size-4xl);
        line-height: var(--line-height-none);
      }
      ::slotted(h2) {
        font-size: var(--font-size-3xl);
        line-height: var(--line-height-sm);
      }
      ::slotted(h3) {
        font-size: var(--font-size-2xl);
        line-height: var(--line-height-md);
      }
      ::slotted(h4) {
        font-size: var(--font-size-xl);
        line-height: var(--line-height-md);
      }
      ::slotted(h5) {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-lg);
      }
      ::slotted(h6) {
        font-size: var(--font-size-md);
        line-height: var(--line-height-lg);
      }

      ::slotted(p) {
        margin: var(--spacing-none);
        font-size: var(--font-size-md);
        line-height: var(--line-height-lg);
      }

      ::slotted(a) {
        color: var(--color-brand-700);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
      }
      ::slotted(a:hover) {
        text-decoration: underline;
      }

      ::slotted(img) {
        border-radius: var(--border-radius-md);
        display: block;
        margin: var(--spacing-lg) calc(-1 * var(--spacing-xs));
        inline-size: calc(100% + 2 * var(--spacing-xs));
        block-size: auto;
      }

      ::slotted(pre) {
        border-radius: var(--border-radius-md);
        margin-inline-start: calc(-1 * var(--spacing-xs));
        margin-inline-end: calc(-1 * var(--spacing-xs));
        padding: var(--spacing-xs);
        background: hsl(var(--color-neutral-700));
        color: hsl(var(--color-neutral-0));
        tab-size: 2;
      }

      ::slotted(h1:not(:first-child)),
      ::slotted(h2:not(:first-child)),
      ::slotted(h3:not(:first-child)),
      ::slotted(h4:not(:first-child)),
      ::slotted(h5:not(:first-child)),
      ::slotted(h6:not(:first-child)) {
        margin-block-start: var(--spacing-2xl);
      }
      ::slotted(p:not(:first-child)),
      ::slotted(pre:not(:first-child)) {
        margin-block-start: var(--spacing-sm);
      }

      ::slotted(h1:not(:last-child)),
      ::slotted(h2:not(:last-child)),
      ::slotted(h3:not(:last-child)),
      ::slotted(h4:not(:last-child)),
      ::slotted(h5:not(:last-child)),
      ::slotted(h6:not(:last-child)) {
        margin-block-end: var(--spacing-sm);
      }
      ::slotted(p:not(:last-child)),
      ::slotted(pre:not(:last-child)) {
        margin-block-end: var(--spacing-sm);
      }
    `,
  ]
}

if (!customElements.get('slate-content')) {
  customElements.define('slate-content', Content)
}
