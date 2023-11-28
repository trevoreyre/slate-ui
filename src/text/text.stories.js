import { css, html } from 'lit'
import '../container/container.js'
import '../stack/stack.js'
import { Text } from './text.js'

const meta = {
  title: 'Stories/Text',
  component: 'slate-text',
}

class StorySizeLabel extends Text {
  static styles = [
    Text.styles,
    css`
      :host {
        flex-shrink: 0;
        min-inline-size: 4ch;
        font-size: var(--text-sm-font-size);
        line-height: var(--text-sm-line-height);
      }
      :host::before {
        margin-block-end: var(--text-sm-margin-before);
      }
      :host::after {
        margin-block-start: var(--text-sm-margin-after);
      }
    `,
  ]

  render() {
    return html`
      <slot></slot>
    `
  }
}
if (!customElements.get('story-size-label')) {
  customElements.define('story-size-label', StorySizeLabel)
}

const Basic = () => html`
  <slate-text>Some text</slate-text>
`

const Size = () => html`
  <slate-stack gap="xl">
    <slate-stack direction="row">
      <story-size-label>xs</story-size-label>
      <slate-text size="xs" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>sm</story-size-label>
      <slate-text size="sm" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>md</story-size-label>
      <slate-text size="md" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>lg</story-size-label>
      <slate-text size="lg" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>xl</story-size-label>
      <slate-text size="xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>2xl</story-size-label>
      <slate-text size="2xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>3xl</story-size-label>
      <slate-text size="3xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>4xl</story-size-label>
      <slate-text size="4xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>5xl</story-size-label>
      <slate-text size="5xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
    <slate-stack direction="row">
      <story-size-label>6xl</story-size-label>
      <slate-text size="6xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-text>
    </slate-stack>
  </slate-stack>
`

export const Paragraphs = () => html`
  <slate-stack gap="xl">
    <slate-container size="xs" align="start">
      <slate-stack gap="xl">
        <slate-stack direction="row">
          <story-size-label>xs</story-size-label>
          <slate-text size="xs">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
        <slate-stack direction="row">
          <story-size-label>sm</story-size-label>
          <slate-text size="sm">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
      </slate-stack>
    </slate-container>
    <slate-container size="sm" align="start">
      <slate-stack gap="xl">
        <slate-stack direction="row">
          <story-size-label>md</story-size-label>
          <slate-text size="md">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
        <slate-stack direction="row">
          <story-size-label>lg</story-size-label>
          <slate-text size="lg">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
      </slate-stack>
    </slate-container>
    <slate-container size="md" align="start">
      <slate-stack gap="xl">
        <slate-stack direction="row">
          <story-size-label>xl</story-size-label>
          <slate-text size="xl">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
        <slate-stack direction="row">
          <story-size-label>2xl</story-size-label>
          <slate-text size="2xl">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
      </slate-stack>
    </slate-container>
    <slate-container size="lg" align="start">
      <slate-stack direction="row">
        <story-size-label>3xl</story-size-label>
        <slate-text size="3xl">
          But the location suppose for gets when mountains, by which phase
          attributing to biases, leather clock pile career from for moving but
          nor the rationally and on been happening, of expect, attained
          something furnished times, she the textile value and on of gone
          background a sitting come like the like.
        </slate-text>
      </slate-stack>
    </slate-container>
    <slate-container size="xl" align="start">
      <slate-stack gap="xl">
        <slate-stack direction="row">
          <story-size-label>4xl</story-size-label>
          <slate-text size="4xl">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening.
          </slate-text>
        </slate-stack>
        <slate-stack direction="row">
          <story-size-label>5xl</story-size-label>
          <slate-text size="5xl">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from.
          </slate-text>
        </slate-stack>
        <slate-stack direction="row">
          <story-size-label>6xl</story-size-label>
          <slate-text size="6xl">
            But the location suppose for gets when mountains, by which phase
            attributing.
          </slate-text>
        </slate-stack>
      </slate-stack>
    </slate-container>
  </slate-stack>
`

export default meta
export { Basic, Size }
