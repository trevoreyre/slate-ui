import { css, html, LitElement } from 'lit'
import { normalize } from '../normalize.css.js'

export class Text extends LitElement {
  static properties = {
    lineHeight: { type: String, attribute: 'line-height', reflect: true },

    size: { type: String, reflect: true },

    transform: { type: String, reflect: true },

    variant: { type: String, reflect: true },

    weight: { type: String, reflect: true },

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
        /* Defaults - size */
        --text-font-size: var(--text-md-font-size);
        --text-line-height: var(--text-md-line-height);
        --text-margin-before: var(--text-md-margin-before);
        --text-margin-after: var(--text-md-margin-after);
        font-size: var(--text-font-size);
        line-height: var(--text-line-height);
        /* Defaults - weight */
        font-weight: var(--font-weight-normal);
        /* Defaults - variant */
        color: hsl(var(--color-text-primary));
      }

      :host::before {
        content: '';
        display: table;
        margin-block-end: var(--text-margin-before);
      }

      :host::after {
        content: '';
        display: table;
        margin-block-start: var(--text-margin-after);
      }

      :host([variant='primary']) {
        color: hsl(var(--color-text-primary));
      }
      :host([variant='secondary']) {
        color: hsl(var(--color-text-secondary));
      }

      :host([size='xs']) {
        --text-font-size: var(--text-xs-font-size);
        --text-line-height: var(--text-xs-line-height);
        --text-margin-before: var(--text-xs-margin-before);
        --text-margin-after: var(--text-xs-margin-after);
        font-weight: var(--font-weight-bold);
      }

      :host([size='sm']) {
        --text-font-size: var(--text-sm-font-size);
        --text-line-height: var(--text-sm-line-height);
        --text-margin-before: var(--text-sm-margin-before);
        --text-margin-after: var(--text-sm-margin-after);
      }

      :host([size='md']) {
        --text-font-size: var(--text-md-font-size);
        --text-line-height: var(--text-md-line-height);
        --text-margin-before: var(--text-md-margin-before);
        --text-margin-after: var(--text-md-margin-after);
      }

      :host([size='lg']) {
        --text-font-size: var(--text-lg-font-size);
        --text-line-height: var(--text-lg-line-height);
        --text-margin-before: var(--text-lg-margin-before);
        --text-margin-after: var(--text-lg-margin-after);
      }

      :host([size='xl']) {
        --text-font-size: var(--text-xl-font-size);
        --text-line-height: var(--text-xl-line-height);
        --text-margin-before: var(--text-xl-margin-before);
        --text-margin-after: var(--text-xl-margin-after);
      }

      :host([size='2xl']) {
        --text-font-size: var(--text-2xl-font-size);
        --text-line-height: var(--text-2xl-line-height);
        --text-margin-before: var(--text-2xl-margin-before);
        --text-margin-after: var(--text-2xl-margin-after);
      }

      :host([size='3xl']) {
        --text-font-size: var(--text-3xl-font-size);
        --text-line-height: var(--text-3xl-line-height);
        font-weight: var(--font-weight-light);
        --text-margin-before: var(--text-3xl-margin-before);
        --text-margin-after: var(--text-3xl-margin-after);
      }

      :host([size='4xl']) {
        --text-font-size: var(--text-4xl-font-size);
        --text-line-height: var(--text-4xl-line-height);
        font-weight: var(--font-weight-light);
        --text-margin-before: var(--text-4xl-margin-before);
        --text-margin-after: var(--text-4xl-margin-after);
      }

      :host([size='5xl']) {
        --text-font-size: var(--text-5xl-font-size);
        --text-line-height: var(--text-5xl-line-height);
        --text-margin-before: var(--text-5xl-margin-before);
        --text-margin-after: var(--text-5xl-margin-after);
        font-weight: var(--font-weight-light);
      }

      :host([size='6xl']) {
        --text-font-size: var(--text-6xl-font-size);
        --text-line-height: var(--text-6xl-line-height);
        --text-margin-before: var(--text-6xl-margin-before);
        --text-margin-after: var(--text-6xl-margin-after);
        font-weight: var(--font-weight-light);
      }

      :host([transform='uppercase']) {
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-lg);
      }
      :host([transform='uppercase'][size='4xl']),
      :host([transform='uppercase'][size='5xl']),
      :host([transform='uppercase'][size='6xl']) {
        letter-spacing: var(--letter-spacing-xl);
      }

      :host([weight='light']) {
        font-weight: var(--font-weight-light);
      }
      :host([weight='normal']) {
        font-weight: var(--font-weight-normal);
      }
      :host([weight='bold']) {
        font-weight: var(--font-weight-bold);
      }

      :host([wrap='false']) {
        white-space: nowrap;
      }
    `,
  ]
}

if (!customElements.get('slate-text')) {
  customElements.define('slate-text', Text)
}
