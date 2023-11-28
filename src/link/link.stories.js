import { html } from 'lit'
import './link.js'

const meta = {
  title: 'Stories/Link',
  component: 'slate-link',
}

const Basic = {
  render: () => html`
    <slate-link>A link</slate-link>
  `,
}

export default meta
export { Basic }
