import { css, html, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

export class Stack extends LitElement {
  static properties = {
    align: { type: String, reflect: true },

    direction: { type: String, reflect: true },

    gap: { type: String, reflect: true },

    justify: { type: String, reflect: true },

    wrap: { type: Boolean, reflect: true },
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
        /* Fix for deprecated [align] attribute */
        text-align: initial;

        /* Defaults - align */
        align-items: start;
        /* Defaults - direction */
        flex-direction: column;
        /* Defaults - gap */
        gap: var(--spacing-md);
      }

      :host([align='baseline']) {
        align-items: baseline;
      }
      :host([align='start']) {
        align-items: flex-start;
      }
      :host([align='center']) {
        align-items: center;
      }
      :host([align='end']) {
        align-items: flex-end;
      }
      :host([align='stretch']) {
        align-items: stretch;
      }

      :host([direction='row']) {
        flex-direction: row;
      }
      :host([direction='column']) {
        flex-direction: column;
      }

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

      :host([justify='start']) {
        justify-content: flex-start;
      }
      :host([justify='center']) {
        justify-content: center;
      }
      :host([justify='end']) {
        justify-content: flex-end;
      }
      :host([justify='stretch']) {
        justify-content: stretch;
      }

      :host([wrap]) {
        flex-wrap: wrap;
      }
    `,
  ]
}

if (!customElements.get('slate-stack')) {
  customElements.define('slate-stack', Stack)
}
