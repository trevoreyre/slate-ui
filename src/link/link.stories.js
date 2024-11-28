import { html } from 'lit'
import './link.css'
import './link.js'

const meta = {
  title: 'Components/Link',
  components: 'slate-link',
}

const Basic = {
  render: () => html`
    <slate-link href="#">A link</slate-link>
  `,
}

export default meta
export { Basic }
