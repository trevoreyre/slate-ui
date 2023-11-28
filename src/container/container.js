import { html, css, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

export class Container extends LitElement {
  static properties = {
    size: {
      type: String,
      reflect: true,
    },
    align: {
      type: String,
      reflect: true,
    },
  }

  render() {
    return html`
      <slot></slot>
    `
  }

  static styles = [
    normalize,
    css`
      :host {
        display: block;
        margin: 0 auto;
        inline-size: 100%;
        max-inline-size: var(--breakpoint-lg);
      }

      :host([size='xs']) {
        max-inline-size: var(--breakpoint-xs);
      }
      :host([size='sm']) {
        max-inline-size: var(--breakpoint-sm);
      }
      :host([size='md']) {
        max-inline-size: var(--breakpoint-md);
      }
      :host([size='lg']) {
        max-inline-size: var(--breakpoint-lg);
      }
      :host([size='xl']) {
        max-inline-size: var(--breakpoint-xl);
      }
      :host([size='2xl']) {
        max-inline-size: var(--breakpoint-2xl);
      }

      :host([align='start']) {
        margin: 0;
      }
      :host([align='center']) {
        margin: 0 auto;
      }
      :host([align='end']) {
        margin: 0 0 0 auto;
      }
    `,
  ]
}

if (!customElements.get('slate-container')) {
  customElements.define('slate-container', Container)
}
