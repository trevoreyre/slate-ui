import { html } from '../../utils/html'

const meta = {
  title: 'Components/Tag',
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
