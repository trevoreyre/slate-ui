import { html, css, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

class AppNavContent extends LitElement {
  static properties = {
    gap: { type: String, reflect: true },
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
        display: flex;
        inline-size: 100%;

        /* Defaults - gap */
        gap: var(--spacing-md);
      }

      /* TODO - Shared CSS for shared props? */
      :host([gap='4xs']) {
        gap: var(--spacing-4xs);
      }
      :host([gap='3xs']) {
        gap: var(--spacing-3xs);
      }
      :host([gap='2xs']) {
        gap: var(--spacing-2xs);
      }
      :host([gap='xs']) {
        gap: var(--spacing-xs);
      }
      :host([gap='sm']) {
        gap: var(--spacing-sm);
      }
      :host([gap='md']) {
        gap: var(--spacing-md);
      }
      :host([gap='lg']) {
        gap: var(--spacing-lg);
      }
      :host([gap='xl']) {
        gap: var(--spacing-xl);
      }
      :host([gap='2xl']) {
        gap: var(--spacing-2xl);
      }
      :host([gap='3xl']) {
        gap: var(--spacing-3xl);
      }
      :host([gap='4xl']) {
        gap: var(--spacing-4xl);
      }
      :host([gap='5xl']) {
        gap: var(--spacing-5xl);
      }
      :host([gap='6xl']) {
        gap: var(--spacing-6xl);
      }
      :host([gap='7xl']) {
        gap: var(--spacing-7xl);
      }
      :host([gap='full']) {
        justify-content: space-between;
        gap: var(--spacing-3xs);
      }

      /* @container appnav (min-width: 800px) {
        :host {
          background-color: red;
        }
      } */
    `,
  ]
}

if (!customElements.get('slate-app-nav-content')) {
  customElements.define('slate-app-nav-content', AppNavContent)
}
export { AppNavContent }
