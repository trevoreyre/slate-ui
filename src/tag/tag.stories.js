import { html } from 'lit'
import './tag.css'
import './tag.js'

const meta = {
  title: 'Components/Tag',
  components: 'slate-tag',
}

const Basic = {
  render: () => html`
    <slate-stack direction="row" gap="3xs" wrap>
      <slate-tag>Apples</slate-tag>
      <slate-tag>Bananas</slate-tag>
      <slate-tag>Strawberries</slate-tag>
    </slate-stack>
  `,
}

export default meta
export { Basic }
