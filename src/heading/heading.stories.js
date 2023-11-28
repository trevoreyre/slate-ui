import { css, html, LitElement } from 'lit'
import '../container/container.js'
import '../stack/stack.js'
import '../text/text.js'
import './heading.js'

const meta = {
  title: 'Stories/Heading',
  component: 'slate-heading',
}

class StorySizeLabel extends LitElement {
  static styles = css`
    :host {
      flex-shrink: 0;
      inline-size: 24px;
    }
  `

  render() {
    return html`
      <slate-text size="sm"><slot></slot></slate-text>
    `
  }
}
if (!customElements.get('story-heading-size-label')) {
  customElements.define('story-heading-size-label', StorySizeLabel)
}

const Basic = () => html`
  <slate-heading>A basic heading</slate-heading>
`

const Size = () => html`
  <slate-stack gap="xl">
    <slate-stack direction="row">
      <story-heading-size-label>xs</story-heading-size-label>
      <slate-heading size="xs" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>sm</story-heading-size-label>
      <slate-heading size="sm" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>md</story-heading-size-label>
      <slate-heading size="md" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>lg</story-heading-size-label>
      <slate-heading size="lg" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>xl</story-heading-size-label>
      <slate-heading size="xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>2xl</story-heading-size-label>
      <slate-heading size="2xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>3xl</story-heading-size-label>
      <slate-heading size="3xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>4xl</story-heading-size-label>
      <slate-heading size="4xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>5xl</story-heading-size-label>
      <slate-heading size="5xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
    <slate-stack direction="row">
      <story-heading-size-label>6xl</story-heading-size-label>
      <slate-heading size="6xl" wrap="false">
        The quick brown fox jumps over the lazy dog
      </slate-heading>
    </slate-stack>
  </slate-stack>
`

export default meta
export { Basic, Size }
