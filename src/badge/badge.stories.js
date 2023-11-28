import { html } from 'lit'
import './badge.js'

const meta = {
  title: 'Stories/Badge',
  component: 'slate-badge',
}

const Basic = {
  render: () => html`
    <div
      style="width: 80px; height: 80px; background: hsl(var(--color-neutral-700)); position: relative;"
    >
      <slate-badge size="2xl">3</slate-badge>
    </div>
  `,
}

export default meta
export { Basic }
