import { css, html, LitElement } from 'lit'

class TextMetrics extends LitElement {
  render() {
    return html``
    return html`
      <span class="lh"></span>
      <span class="em"></span>
      <span class="cap"></span>
      <span class="ex"></span>
      <span class="cap-cap"></span>
      <span class="cap-asc"></span>
      <span class="cap-des"></span>
    `
  }

  static styles = css`
    :host {
      display: flex;
      position: absolute;
      gap: var(--spacing-4xs);
      inset-block: 0;
      inset-inline: 0;
    }

    span {
      position: relative;
      display: block;
      inline-size: var(--spacing-sm);
      background-color: hsl(var(--color-neutral-600));
      color: hsl(var(--color-neutral-200));
    }

    span[class*='cap-'] {
      background-color: hsl(var(--color-neutral-400));
    }

    span::after {
      font-family: monospace;
      display: flex;
      align-items: end;
      justify-content: center;
      position: absolute;
      inset: 0;
      font-size: 9px;
      line-height: 1;
    }

    .lh {
      block-size: 1lh;
      align-self: baseline;
    }

    .lh::after {
      content: 'lh';
    }

    .em {
      block-size: 1em;
      align-self: center;
    }

    .em::after {
      content: 'em';
    }

    .cap {
      block-size: 1cap;
      align-self: end;
      translate: 0 calc(-1 * var(--font-descent));
    }

    .cap::after {
      content: 'cap';
    }

    .ex {
      block-size: 1ex;
      align-self: end;
      translate: 0 calc(-1 * var(--font-descent));
    }

    .ex::after {
      content: 'ex';
    }

    .cap-cap {
      block-size: var(--font-cap-height);
      align-self: end;
      translate: 0 calc(-1 * var(--font-descent));
    }

    .cap-cap::after {
      content: 'cap';
    }

    .cap-asc {
      block-size: var(--font-ascent);
      align-self: end;
      translate: 0 calc(-1 * var(--font-descent));
    }

    .cap-asc::after {
      content: 'asc';
    }

    .cap-des {
      block-size: var(--font-descent);
      align-self: end;
    }

    .cap-des::after {
      content: 'des';
    }
  `
}

if (!customElements.get('story-text-metrics')) {
  customElements.define('story-text-metrics', TextMetrics)
}

export { TextMetrics }
