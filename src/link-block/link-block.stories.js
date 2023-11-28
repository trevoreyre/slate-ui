import { html } from 'lit'
import '../heading/heading.js'
import '../stack/stack.js'
import '../text/text.js'
import './link-block.js'

const meta = {
  title: 'Stories/LinkBlock',
  component: 'slate-link-block',
}

const Basic = {
  render: () => html`
    <slate-link-block href="#">
      <slate-stack gap="xs">
        <slate-heading size="lg">LinkBlock</slate-heading>
        <slate-text>Everything in this block is part of the link.</slate-text>
        <slate-text>Even this text here.</slate-text>
      </slate-stack>
    </slate-link-block>
  `,
}

export default meta
export { Basic }
